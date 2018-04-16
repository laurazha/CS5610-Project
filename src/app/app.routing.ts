import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './views/home/login/login.component';
import {StudentDashboardComponentComponent} from './views/user/student/student-dashboard-component/student-dashboard-component.component';
import {ProfessorDashboardComponentComponent} from './views/user/professor/professor-dashboard-component/professor-dashboard-component.component';
import {AdminDashboardComponentComponent} from './views/user/admin/admin-dashboard/admin-dashboard.component';
import {StudentEditComponentComponent} from './views/user/admin/student-edit/student-edit.component';
import {ProfessorEditComponentComponent} from './views/user/admin/professor-edit/professor-edit.component';
import {ReservationComponentComponent} from './views/user/student/reservation-component/reservation-component.component';
import {StudentNewComponentComponent} from './views/user/admin/student-new/student-new.component';
import {ProfessorNewComponentComponent} from './views/user/admin/professor-new/professor-new.component';
import {HomeComponent} from './views/home/home/home.component';
import {RegisterComponent} from './views/home/register/register.component';
import {TopCoursesComponent} from './views/home/top-courses/top-courses.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentDashboardComponentComponent},
  {path: 'professor', component: ProfessorDashboardComponentComponent},
  {path: 'admin', component: AdminDashboardComponentComponent},
  {path: 'admin/student', component: StudentEditComponentComponent},
  {path: 'admin/professor', component: ProfessorEditComponentComponent},
  {path: 'admin/student/new', component: StudentNewComponentComponent},
  {path: 'admin/professor/new', component: ProfessorNewComponentComponent},
  {path: 'student/reservation', component: ReservationComponentComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'topcourses', component: TopCoursesComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
