import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class AuthService {

  private http =  inject(HttpClient);

  constructor() {

  }

  public returnCepData(cep:string) : Observable<any>{
    let url:string = `https://viacep.com.br/ws/${cep}/json`;
    return this.http.get(url);
  }

}
