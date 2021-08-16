import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedSite: string;

  onNavigate(site: string){
    this.loadedSite = site;
  }

}
