import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruits',
  standalone: true
})
export class FruitsPipe implements PipeTransform {
    private emojiMap: { [key: string]: string } = {
      'maça': '🍎',
      'banana': '🍌',
      'laranja': '🍊',
      'melancia': '🍉',
      'uva': '🍇',
      'morango': '🍓',
      'abacaxi': '🍍',
      'manga': '🥭'
    };

    transform(value: string): string {
      return this.emojiMap[value.toLowerCase()] || value;
    }
}
