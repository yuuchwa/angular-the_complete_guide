import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddTick: number;
  evenTick: number;
  tickListener(ticker:{tick: number}){
    if (ticker.tick % 2 == 0){
      this.evenTick = ticker.tick;
    }
    else{
      this.oddTick = ticker.tick;
    }
  }
}
