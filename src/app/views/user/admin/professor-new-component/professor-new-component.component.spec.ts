import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorNewComponentComponent } from './professor-new-component.component';

describe('ProfessorNewComponentComponent', () => {
  let component: ProfessorNewComponentComponent;
  let fixture: ComponentFixture<ProfessorNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
