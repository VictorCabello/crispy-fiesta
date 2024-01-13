import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './program/dashboard/dashboard.component';
import { ProgramListComponent } from './program/dashboard/program-list/program-list.component';
import { ProgramStatisticsComponent } from './program/dashboard/program-statistics/program-statistics.component';
import { FormsModule } from '@angular/forms';
import { ProgramListSelectorComponent } from './program/dashboard/program-list/program-list-selector/program-list-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProgramListComponent,
    ProgramStatisticsComponent,
    ProgramListSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
