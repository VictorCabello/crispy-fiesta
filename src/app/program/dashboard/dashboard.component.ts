import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  @ViewChild('programList') programList!:ElementRef;
  @ViewChild('statistics') statistics!:ElementRef;

  showProgramList() : void {
    this.programList.nativeElement.classList.add('is-active');
    this.programList.nativeElement.classList.remove('is-hidden');
    this.statistics.nativeElement.classList.add('is-hidden');
    this.statistics.nativeElement.classList.remove('is-active');
  }

  showStatistics() : void {
    this.statistics.nativeElement.classList.add('is-active');
    this.statistics.nativeElement.classList.remove('is-hidden');
    this.programList.nativeElement.classList.add('is-hidden');
    this.programList.nativeElement.classList.remove('is-active');
  }
}
