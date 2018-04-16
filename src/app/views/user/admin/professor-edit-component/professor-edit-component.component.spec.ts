import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEditComponentComponent } from './professor-edit-component.component';

describe('ProfessorEditComponentComponent', () => {
  let component: ProfessorEditComponentComponent;
  let fixture: ComponentFixture<ProfessorEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
