import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showProgramList()', () => {
    let programList:any;
    let statistics:any;
    beforeEach(() => {
      programList = component.programList.nativeElement.classList;
      statistics = component.statistics.nativeElement.classList;
      spyOn(programList,'add');
      spyOn(programList,'remove');
      spyOn(statistics,'add');
      spyOn(statistics,'remove');
      // Execute
      component.showProgramList();
    });
    it('should display progamList', () => {
      expect(programList.add).toHaveBeenCalledWith('is-active');
      expect(programList.remove).toHaveBeenCalledWith('is-hidden');
    });
    it('should hide statistics', () => {
      expect(statistics.remove).toHaveBeenCalledWith('is-active');
      expect(statistics.add).toHaveBeenCalledWith('is-hidden');
    });
  });

  describe('showStatistics()', () => {
    let programList:any;
    let statistics:any;
    beforeEach(() => {
      programList = component.programList.nativeElement.classList;
      statistics = component.statistics.nativeElement.classList;
      spyOn(programList,'add');
      spyOn(programList,'remove');
      spyOn(statistics,'add');
      spyOn(statistics,'remove');
      // Execute
      component.showStatistics();
    });
    it('should hide progamList', () => {
      expect(programList.remove).toHaveBeenCalledWith('is-active');
      expect(programList.add).toHaveBeenCalledWith('is-hidden');
    });
    it('should show statistics', () => {
      expect(statistics.add).toHaveBeenCalledWith('is-active');
      expect(statistics.remove).toHaveBeenCalledWith('is-hidden');
    });
  });
});
