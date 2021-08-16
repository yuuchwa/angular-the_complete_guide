import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class Dropdown {

  @HostBinding('class.open') dropdownOpen = false; // beinhaltet das Attribut welches gesetzt werden soll.

  @HostListener('click') toggleOpen(){ // Hört aut das click Event
    this.dropdownOpen = !this.dropdownOpen;
  }
}
