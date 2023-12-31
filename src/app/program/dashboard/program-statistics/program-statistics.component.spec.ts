import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStatisticsComponent } from './program-statistics.component';

describe('ProgramStatisticsComponent', () => {
  let component: ProgramStatisticsComponent;
  let fixture: ComponentFixture<ProgramStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramStatisticsComponent]
    });
    fixture = TestBed.createComponent(ProgramStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
