import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.sass']
})
export class ProgramListComponent {
  @HostBinding('class.is-active') isActive:boolean = false;
  @HostBinding('class.is-hidden') isHidden:boolean = false;

  show(): void {
    this.isActive = true;
    this.isHidden = false;
  }

  hide(): void {
    this.isActive = false;
    this.isHidden = true;
  }

}
