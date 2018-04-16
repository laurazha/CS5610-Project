import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponentComponent } from './admin-dashboard.component';

describe('AdminDashboardComponentComponent', () => {
  let component: AdminDashboardComponentComponent;
  let fixture: ComponentFixture<AdminDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
