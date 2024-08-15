import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  randomFruit(){
    const emojis: string[] = ['maça', 'banana', 'laranja', 'melancia', 'uva', 'morango', 'abacaxi', 'manga'];
    const randomEmoji = Math.floor(Math.random() * emojis.length);
    return emojis[randomEmoji];
  }
}
