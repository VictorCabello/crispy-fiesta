import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListComponent } from './program-list.component';
import { ProgramListSelectorComponent } from './program-list-selector/program-list-selector.component';
import { FormsModule } from '@angular/forms';

describe('ProgramListComponent', () => {
  let component: ProgramListComponent;
  let fixture: ComponentFixture<ProgramListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramListComponent,
        ProgramListSelectorComponent
      ],
      imports: [
        FormsModule,
      ]
    });
    fixture = TestBed.createComponent(ProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
