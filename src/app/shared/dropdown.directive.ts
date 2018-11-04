import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: Boolean = false;

  constructor(private elfRef: ElementRef, public reder: Renderer2) { 

  }

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
