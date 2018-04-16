import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNewComponentComponent } from './student-new-component.component';

describe('StudentNewComponentComponent', () => {
  let component: StudentNewComponentComponent;
  let fixture: ComponentFixture<StudentNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
