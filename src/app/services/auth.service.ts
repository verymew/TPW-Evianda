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
  private _usuarioLogado: any;


  constructor() {

  }

  public async isLogado() {
    console.log(this.auth.currentUser);
    this._usuarioLogado = await this.auth.authState;
    return this._usuarioLogado != null;
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
