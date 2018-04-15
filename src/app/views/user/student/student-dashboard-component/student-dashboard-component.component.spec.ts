import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardComponentComponent } from './student-dashboard-component.component';

describe('StudentDashboardComponentComponent', () => {
  let component: StudentDashboardComponentComponent;
  let fixture: ComponentFixture<StudentDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
