import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListSelectorComponent } from './program-list-selector.component';
import { FormsModule } from '@angular/forms';

describe('ProgramListSelectorComponent', () => {
  let component: ProgramListSelectorComponent;
  let fixture: ComponentFixture<ProgramListSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramListSelectorComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(ProgramListSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
