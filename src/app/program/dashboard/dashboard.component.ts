import { Component } from '@angular/core';

enum Tab {
  ProgramList,
  ProgramStatistics
}

interface TabInfo {
  label: string;
  icon: string;
  routerLink: string;
  tab: Tab;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  tabsInfo: TabInfo[] = [
    {
      label: 'Programas',
      icon: 'lni lni-list',
      routerLink: '/dashboard/program-list',
      tab: Tab.ProgramList
    },
    {
      label: 'Estatísticas',
      icon: 'lni lni-stats-up',
      routerLink: '/dashboard/program-statistics',
      tab: Tab.ProgramStatistics
    }
  ];

  currentTab: Tab = Tab.ProgramList;
  tabs: typeof Tab = Tab;

  classesFor(aTab: Tab): string {
    return this.currentTab === aTab ? 'is-active' : '';
  }

  setCurrentTab(aTab: Tab): void {
    this.currentTab = aTab;
  }
}
