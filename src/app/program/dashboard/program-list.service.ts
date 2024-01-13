import { EventEmitter, Injectable } from '@angular/core';
import { Program } from './program-list/program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  programEmmiter: EventEmitter<Program> = new EventEmitter<Program>();

  constructor() { }

  getProgramList(startDate: Date, endDate: Date): void {
    const today = new Date(2021, 0, 1);
    if (startDate.getTime() == today.getTime()) {
      const program: Program = {
        name: 'Programa 2',
        date: new Date(),
        description: 'Programa 1'
      };
      this.programEmmiter.emit(program);
    }
 }
}
