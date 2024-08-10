import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http =  inject(HttpClient);
  private auth = inject(AngularFireAuth)

  constructor() {

  }

  public returnCepData(cep:string) : Observable<any>{
    let url:string = `https://viacep.com.br/ws/${cep}/json`;
    return this.http.get(url);
  }

  public registerUser(email:string, password:string) : Promise<any>
  {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  public login(email:string, password:string) : Promise<any>
  {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

}
