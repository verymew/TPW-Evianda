import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom, Observable } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, query, where, getDocs, doc, setDoc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViandaService {
  private firestore = inject(Firestore);
  private auth = inject(AngularFireAuth);
  private http = inject(HttpClient);

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
      if (querySnapshot.empty) {
        throw Error("Vazia");
      }
      const firstDoc = querySnapshot.docs[0];
      if (firstDoc) {
        const data = {
          id: firstDoc.id,
          data: firstDoc.data()
        };
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteVianda(userid: string): Promise<any> {
    try {
      const docRef = collection(this.firestore, "cardapio");
      const q = query(docRef, where("userid", "==", userid));
      const querySnapshot = await getDocs(q);
      for (const docSnapshot of querySnapshot.docs) {
        await deleteDoc(doc(this.firestore, 'cardapio', docSnapshot.id));
      }
    } catch (error) {
      throw error;
    }
  }

  async editVianda(viandaid: string, data: any): Promise<void> {
    try{
      const viandaRef = doc(this.firestore, 'cardapio', viandaid);
      await updateDoc(viandaRef, data);
    } catch(err){
      throw err;
    }
  }

  public returnCatImage(): Observable<any> {
    let url: string = `https://api.thecatapi.com/v1/images/search?limit=1`;
    return this.http.get(url);
  }
}
