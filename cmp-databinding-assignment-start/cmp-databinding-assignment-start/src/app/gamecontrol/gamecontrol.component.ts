import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  ticks = 0;
  incrementerRef: any;

  @Output('ticker') tick = new EventEmitter<{increment: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.incrementerRef = setInterval(() => {this.ticks++;}, 3000);
    this.tick.emit({
      increment: this.ticks
    });
  }

  onPause(){
    clearInterval(this.incrementerRef);
  }

}
