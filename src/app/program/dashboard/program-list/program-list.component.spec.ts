import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListComponent } from './program-list.component';

describe('ProgramListComponent', () => {
  let component: ProgramListComponent;
  let fixture: ComponentFixture<ProgramListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramListComponent]
    });
    fixture = TestBed.createComponent(ProgramListComponent);
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
