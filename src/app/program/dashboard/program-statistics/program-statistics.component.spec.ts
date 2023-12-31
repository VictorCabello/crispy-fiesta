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

  describe('.show()', () => {
    beforeEach(() => {
      component.show();
    });
    it('should show the component', ()=>{
      expect(component.isActive).toBeTrue();
      expect(component.isHidden).toBeFalse();
    });
  });

  describe('.hide()', () => {
    beforeEach(() => {
      component.hide();
    });
    it('should hide the component', ()=>{
      expect(component.isHidden).toBeTrue();
      expect(component.isActive).toBeFalse();
    });
  });
});