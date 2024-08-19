import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruits',
  standalone: true
})
export class FruitsPipe implements PipeTransform {
  private emojiMap: { [key: string]: string } = {
    'a': '🍎',
    'b': '🍌',
    'c': '🍒',
    'd': '🍩',
    'e': '🍆',
    'f': '🍟',
    'g': '🍇',
    'h': '🍯',
    'i': '🍦',
    'j': '🍏',
    'k': '🥝',
    'l': '🍋',
    'm': '🍈',
    'n': '🍉',
    'o': '🍊',
    'p': '🍍',
    'q': '🍑',
    'r': '🍒',
    's': '🍓',
    't': '🍅',
    'u': '🍆',
    'v': '🍇',
    'w': '🍉',
    'x': '🍈',
    'y': '🍋',
    'z': '🥭',
  };

  transform(value: string): string {
    const firstChar = value.trim().charAt(0).toLowerCase();
    return this.emojiMap[firstChar] || value;
  }
}
