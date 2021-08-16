
export class CounterService {

  counterActivToInactiv: number = 0;
  counterInactivToactiv: number = 0;

  increaseInactivCounter() {
    this.counterActivToInactiv++;
    console.log('Inactive users increase to ' + this.counterActivToInactiv);
  }

  increaseActivCounter() {
    this.counterInactivToactiv++;
    console.log('Active users increase to ' + this.counterInactivToactiv);

  }
}
