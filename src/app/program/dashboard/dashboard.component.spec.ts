import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramStatisticsComponent } from './program-statistics/program-statistics.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ProgramListComponent,
        ProgramStatisticsComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showProgramList()', () => {
    let programList:ProgramListComponent;
    let statistics:any;
    beforeEach(() => {
      programList = component.programList;
      statistics = component.statistics;
      spyOn(programList,'show').and.callFake(()=>{});
      spyOn(programList,'hide').and.callFake(()=>{});
      spyOn(statistics,'show').and.callFake(()=>{});
      spyOn(statistics,'hide').and.callFake(()=>{});
      // Execute
      component.showProgramList();
    });
    it('should display progamList', () => {
      expect(programList.show).toHaveBeenCalled();
    });
    it('should hide statistics', () => {
      expect(statistics.hide).toHaveBeenCalled();
    });
  });

  describe('showStatistics()', () => {
    let programList:ProgramListComponent;
    let statistics:ProgramStatisticsComponent;
    beforeEach(() => {
      programList = component.programList;
      statistics = component.statistics;
      spyOn(programList,'show').and.callFake(()=>{});
      spyOn(programList,'hide').and.callFake(()=>{});
      spyOn(statistics,'show').and.callFake(()=>{});
      spyOn(statistics,'hide').and.callFake(()=>{});
      // Execute
      component.showStatistics();
    });
    it('should hide progamList', () => {
      expect(programList.hide).toHaveBeenCalled();
    });
    it('should show statistics', () => {
      expect(statistics.show).toHaveBeenCalled();
    });
  });
});
