import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramStatisticsComponent } from './program-statistics/program-statistics.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let programList:ProgramListComponent;
  let statistics:ProgramStatisticsComponent;

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
    programList = component.programList;
    statistics = component.statistics;
    spyOn(programList,'show');
    spyOn(programList,'hide');
    spyOn(statistics,'show');
    spyOn(statistics,'hide');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showProgramList()', () => {
    beforeEach(() => {
      component.showProgramList();
    });
    it('should display progamList', () => {
      expect(programList.show).toHaveBeenCalled();
    });
    it('should mark programList as currentTab', () => {
      expect(component.currentTab).toEqual(component.tabs.ProgramList);
    });
    it('should hide statistics', () => {
      expect(statistics.hide).toHaveBeenCalled();
    });
  });

  describe('showStatistics()', () => {
    beforeEach(() => {
      component.showStatistics();
    });
    it('should mark statistics as currentTab', () => {
      expect(component.currentTab).toEqual(component.tabs.Statistics);
    });
    it('should hide progamList', () => {
      expect(programList.hide).toHaveBeenCalled();
    });
    it('should show statistics', () => {
      expect(statistics.show).toHaveBeenCalled();
    });
  });
});
