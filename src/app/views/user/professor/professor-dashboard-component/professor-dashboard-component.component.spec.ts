import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDashboardComponentComponent } from './professor-dashboard-component.component';

describe('ProfessorDashboardComponentComponent', () => {
  let component: ProfessorDashboardComponentComponent;
  let fixture: ComponentFixture<ProfessorDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
