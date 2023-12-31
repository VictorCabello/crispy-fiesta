import { Component } from '@angular/core';
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

  currentTab: Tab = Tab.ProgramList;
  tabs: typeof Tab = Tab;

  showProgramList() : void {
    this.currentTab = Tab.ProgramList;
  }

  showStatistics() : void {
    this.currentTab = Tab.Statistics;
  }
}
