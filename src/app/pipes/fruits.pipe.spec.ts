import { FruitsPipe } from './fruits.pipe';

describe('FruitsPipe', () => {
  it('create an instance', () => {
    const pipe = new FruitsPipe();
    expect(pipe).toBeTruthy();
  });
});
