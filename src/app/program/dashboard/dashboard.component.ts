import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramStatisticsComponent } from './program-statistics/program-statistics.component';

enum Tab {
  ProgramList,
  Statistics
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent{

  @ViewChild(ProgramListComponent)
  programList!:ProgramListComponent;
  @ViewChild(ProgramStatisticsComponent)
  statistics!:ProgramStatisticsComponent;

  currentTab: Tab = Tab.ProgramList;
  tabs: typeof Tab = Tab;

  showProgramList() : void {
    this.programList.show();
    this.statistics.hide();
    this.currentTab = Tab.ProgramList;
  }

  showStatistics() : void {
    this.statistics.show();
    this.programList.hide();
    this.currentTab = Tab.Statistics;
  }
}
