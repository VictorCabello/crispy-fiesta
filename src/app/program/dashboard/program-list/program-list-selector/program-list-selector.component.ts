import { Component, EventEmitter, Output } from '@angular/core';
import { ProgramCycle } from '../program-cycle';

@Component({
  selector: 'app-program-list-selector',
  templateUrl: './program-list-selector.component.html',
  styleUrls: ['./program-list-selector.component.sass']
})
export class ProgramListSelectorComponent {
  static defaultCycle: ProgramCycle = {
    name: 'Selecciona un Ciclo',
    startDate: new Date(1987, 0, 1),
    endDate: new Date(1987, 0, 1)
  };

  currentCycle: ProgramCycle = ProgramListSelectorComponent.defaultCycle;

  cycleList: ProgramCycle[] = [
    ProgramListSelectorComponent.defaultCycle,
    { name: 'Cycle 1', startDate: new Date(2021, 0, 1), endDate: new Date(2021, 0, 1) },
  ];

  @Output()
  cycleSelected: EventEmitter<ProgramCycle> = new EventEmitter<ProgramCycle>();

  selectCycle(cycle: ProgramCycle): void {
    this.cycleSelected.emit(cycle);
  }

  findCycle(startDate: Date, endDate: Date): void {
    this.currentCycle = this.cycleList.find((cycle) => {
      return cycle.startDate.getTime() === startDate.getTime() && cycle.endDate.getTime() === endDate.getTime();
    }) || ProgramListSelectorComponent.defaultCycle;
  }

}
