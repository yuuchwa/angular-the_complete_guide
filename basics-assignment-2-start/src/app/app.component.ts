import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowClick = false;

  constructor() { }

  ngOnInit(): void {
  }

  // onClick() {
  //   if(this.username != '') {
  //     return this.allowClick = true;
  //   }
  //   return this.allowClick
  // }
}
