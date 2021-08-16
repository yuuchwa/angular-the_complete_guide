import { CounterService } from './counter.service';
import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class UsersService {
  constructor(private counterService: CounterService) { }

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
    this.counterService.increaseInactivCounter;
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
    this.counterService.increaseActivCounter;
  }
}
