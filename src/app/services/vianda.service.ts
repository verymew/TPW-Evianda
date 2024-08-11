import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom, Observable } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class ViandaService {
  private firestore = inject(Firestore);
  private collectionName = 'cardapio';
  private auth = inject(AngularFireAuth);
  private userid:string = "";

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
      console.error('Erro ao salvar vianda:', error);
      throw error;
    }
  }

  async getUserTasks(): Promise<any> {
    try{
      const user = await this.auth.currentUser;
      if (user === null) {
        console.error('Usuário não autenticado');
        return null;
      }
      const docRef = collection(this.firestore, "cardapio");
      const q = query(docRef, where("userid", "==", user.uid));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs[0].data();
    } catch(error)
    {
      console.log(error);
    }
  }

  async getUserid() : Promise<void>
  {
    const user = await this.auth.currentUser;

  }




}
