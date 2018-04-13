import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseNewComponent } from './professor-course-new.component';

describe('ProfessorCourseNewComponent', () => {
  let component: ProfessorCourseNewComponent;
  let fixture: ComponentFixture<ProfessorCourseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCourseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCourseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
