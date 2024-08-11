import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom, Observable } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, query, where, getDocs, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class ViandaService {
  private firestore = inject(Firestore);
  private collectionName = 'cardapio';
  private auth = inject(AngularFireAuth);
  private userid: string = "";


  constructor() {
  }

  public async saveVianda(data: any): Promise<void> {
    try {
      const tasksRef = collection(this.firestore, 'cardapio');
      const user = await this.auth.currentUser;
      if (user) {
        data.userid = user.uid;
        const docRef = doc(tasksRef);
        return await setDoc(docRef, data);
      }
    } catch (error) {
      throw error;
    }
  }

  async getVianda(): Promise<any> {
    try {
      const user = await this.auth.currentUser;
      if (user === null) {
        console.error('Usuário não autenticado');
        return null;
      }
      const docRef = collection(this.firestore, "cardapio");
      const q = query(docRef, where("userid", "==", user.uid));
      const querySnapshot = await getDocs(q);
      if(querySnapshot.empty){
        throw Error("Vazia");
      }
      const firstDoc = querySnapshot.docs[0];
      if (firstDoc) {
        const data = {
          id: firstDoc.id,
          ...firstDoc.data()
        };
        return data;
      }
      } catch (error) {
        throw error;
      }
    }

  async deleteVianda(userid: string): Promise < any > {
      try {
        const docRef = collection(this.firestore, "cardapio");
        const q = query(docRef, where("userid", "==", userid));
        const querySnapshot = await getDocs(q);
        for(const docSnapshot of querySnapshot.docs) {
      await deleteDoc(doc(this.firestore, 'cardapio', docSnapshot.id));
      console.log(`Documento com ID ${docSnapshot.id} deletado com sucesso.`);
    }
  } catch(error) {
    console.log(error);
  }
}

  async editVianda(userid: string): Promise < any > {
  try{
    const docRef = collection(this.firestore, "cardapio");
    const q = query(docRef, where("userid", "==", userid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }catch(error) {

  }
}
}
