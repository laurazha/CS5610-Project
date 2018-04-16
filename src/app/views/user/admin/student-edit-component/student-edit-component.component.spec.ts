import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditComponentComponent } from './student-edit-component.component';

describe('StudentEditComponentComponent', () => {
  let component: StudentEditComponentComponent;
  let fixture: ComponentFixture<StudentEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
