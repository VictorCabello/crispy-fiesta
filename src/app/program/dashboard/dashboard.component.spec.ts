import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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

  describe('showProgramList()', () => {
    beforeEach(() => {
      component.showProgramList();
    });
    it('should mark programList as currentTab', () => {
      expect(component.currentTab).toEqual(component.tabs.ProgramList);
    });
  });

  describe('showStatistics()', () => {
    beforeEach(() => {
      component.showStatistics();
    });
    it('should mark statistics as currentTab', () => {
      expect(component.currentTab).toEqual(component.tabs.Statistics);
    });
  });
});
