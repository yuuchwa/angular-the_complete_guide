import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() clickSelected = new EventEmitter<string>();


  onClickSelect(site: string) {
    this.clickSelected.emit(site);
  }
}
