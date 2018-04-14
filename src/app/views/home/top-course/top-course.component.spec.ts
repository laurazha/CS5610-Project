import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCourseComponent } from './top-course.component';

describe('TopCourseComponent', () => {
  let component: TopCourseComponent;
  let fixture: ComponentFixture<TopCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
