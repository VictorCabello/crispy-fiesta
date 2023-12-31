import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let listClass: string;
  let statistictsClass: string;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
      ]
      , imports: [ RouterModule.forRoot([]) ]
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('.classesFor(Tab.ProgramList)', () => {
    beforeEach(() => {
      listClass = component.classesFor(component.tabs.ProgramList);
      statistictsClass = component.classesFor(component.tabs.ProgramStatistics);
    });
    it('should set empty class for ProgramStatistics', () => {
      expect(statistictsClass).toEqual('');
    });
    it('should set is-active as class for ProgramList', () => {
      expect(listClass).toEqual('is-active');
    });
    it('should mark programList as currentTab', () => {
      expect(component.currentTab).toEqual(component.tabs.ProgramList);
    });
  });

  describe('.classesFor(Tab.ProgramStatistics)', () => {
    beforeEach(() => {
      component.setCurrentTab(component.tabs.ProgramStatistics);
      listClass = component.classesFor(component.tabs.ProgramList);
      statistictsClass = component.classesFor(component.tabs.ProgramStatistics);
    });
    it('should set empty class for ProgramList', () => {
      expect(listClass).toEqual('');
    });
    it('should set is-active as class for ProgramStatistics', () => {
      expect(statistictsClass).toEqual('is-active');
    });
    it('should mark ProgramStatistics as currentTab', () => {
      expect(component.currentTab).toEqual(component.tabs.ProgramStatistics);
    });
  });

});
