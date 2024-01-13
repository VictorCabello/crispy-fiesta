import { Component, Input, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ProgramListSelectorComponent } from './program-list-selector/program-list-selector.component';
import { ProgramService } from '../program-list.service';
import { ProgramCycle } from './program-cycle';
import { Program } from './program';
import { Router } from '@angular/router';

enum ListState {
  Loading,
  Loaded,
}

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.sass']
})
export class ProgramListComponent implements AfterViewInit, OnInit {

  @ViewChild(ProgramListSelectorComponent)
  selectorComponent!: ProgramListSelectorComponent;

  list: Program[] = [];

  state: ListState = ListState.Loaded;

  listState = ListState;

  @Input()
  startDate!: string;

  @Input()
  endDate!: string;

  constructor(
    private router: Router,
    private programService: ProgramService) {
    this.programService
      .programEmmiter
      .subscribe((program) => {
        this.list.push(program);
        this.state = ListState.Loaded;
      });
  }

  ngOnInit(): void {
    this.programService.getProgramList(
      new Date(this.startDate),
      new Date(this.endDate),
    );
  }

  ngAfterViewInit(): void {
    this.selectorComponent.findCycle(
      new Date(this.toDate(this.startDate)),
      new Date(this.toDate(this.endDate)),
    );
  }

  onCycleSelected(cycle: ProgramCycle) {
    if (cycle === ProgramListSelectorComponent.defaultCycle) {
      this.list = [];
    }
    else {
      this.state = ListState.Loading;
      this.router.navigate(['/dashboard/program-list'],
        { queryParams: { startDate: cycle.startDate.toDateString(), endDate: cycle.endDate.toDateString() } }
      );
      this.programService.getProgramList(cycle.startDate, cycle.endDate);
    }
  }

  toDate(value: string): Date {
    const date = new Date(value) || new Date();
    return date;
  }
}
