import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './program/dashboard/dashboard.component';
import { ProgramListComponent } from './program/dashboard/program-list/program-list.component';
import { ProgramStatisticsComponent } from './program/dashboard/program-statistics/program-statistics.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'program-list', component: ProgramListComponent },
      { path: 'program-statistics', component: ProgramStatisticsComponent },
      { path: '', redirectTo: '/dashboard/program-list', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/dashboard/program-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
