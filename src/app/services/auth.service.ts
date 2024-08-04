import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http =  inject(HttpClient);

  constructor() {

  }

  public retornarDadosCep(cep:string) : Observable<any>{
    let url:string = `https://viacep.com.br/ws/${cep}/json`;
    return this.http.get(url);
  }



}
