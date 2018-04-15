import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './views/home/login/login.component';
import {StudentDashboardComponentComponent} from './views/user/student/student-dashboard-component/student-dashboard-component.component';
import {ProfessorDashboardComponentComponent} from './views/user/professor/professor-dashboard-component/professor-dashboard-component.component';
import {AdminDashboardComponentComponent} from './views/user/admin/admin-dashboard-component/admin-dashboard-component.component';
import {StudentEditComponentComponent} from './views/user/admin/student-edit-component/student-edit-component.component';
import {ProfessorEditComponentComponent} from './views/user/admin/professor-edit-component/professor-edit-component.component';
import {ReservationComponentComponent} from './views/user/student/reservation-component/reservation-component.component';
import {StudentNewComponentComponent} from './views/user/admin/student-new-component/student-new-component.component';
import {ProfessorNewComponentComponent} from './views/user/admin/professor-new-component/professor-new-component.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentDashboardComponentComponent},
  {path: 'professor', component: ProfessorDashboardComponentComponent},
  {path: 'admin', component: AdminDashboardComponentComponent},
  {path: 'admin/student', component: StudentEditComponentComponent},
  {path: 'admin/professor', component: ProfessorEditComponentComponent},
  {path: 'admin/student/new', component: StudentNewComponentComponent},
  {path: 'admin/professor/new', component: ProfessorNewComponentComponent},
  {path: 'student/reservation', component: ReservationComponentComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
