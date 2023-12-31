import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-program-statistics',
  templateUrl: './program-statistics.component.html',
  styleUrls: ['./program-statistics.component.sass']
})
export class ProgramStatisticsComponent {
  @HostBinding('class.is-active') isActive:boolean = false;
  @HostBinding('class.is-hidden') isHidden:boolean = true;

  show(): void {
    this.isActive = true;
    this.isHidden = false;
  }

  hide(): void {
    this.isActive = false;
    this.isHidden = true;
  }
}
