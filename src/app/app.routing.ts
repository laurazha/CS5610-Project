import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './views/home/login/login.component';
import {HomeComponent} from './views/home/home/home.component';
import {RegisterComponent} from './views/home/register/register.component';
import {CourseEditComponent} from './views/course/professor/course-edit/course-edit.component';
import {ProfessorCourseListComponent} from './views/course/professor/professor-course-list/professor-course-list.component';
import {ProfessorCourseNewComponent} from './views/course/professor/professor-course-new/professor-course-new.component';
import {RatingComponent} from './views/course/student/rating/rating.component';
import {StudentCourseListComponent} from './views/course/student/student-course-list/student-course-list.component';
import {StudentCourseNewComponent} from './views/course/student/student-course-new/student-course-new.component';
import {TopCoursesComponent} from './views/home/top-courses/top-courses.component';
import {StudentDashboardComponent} from './views/user/student/student-dashboard/student-dashboard.component';
import {ProfessorDashboardComponent} from './views/user/professor/professor-dashboard/professor-dashboard.component';
import {AdminDashboardComponent} from './views/user/admin/admin-dashboard/admin-dashboard.component';
import {StudentEditComponent} from './views/user/admin/student-edit/student-edit.component';
import {ProfessorEditComponent} from './views/user/admin/professor-edit/professor-edit.component';
import {StudentNewComponent} from './views/user/admin/student-new/student-new.component';
import {ProfessorNewComponent} from './views/user/admin/professor-new/professor-new.component';
import {AuthGuard} from './services/auth-guard.service';
import {AdminEditComponent} from './views/user/admin/admin-edit/admin-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentDashboardComponent, canActivate: [AuthGuard]},
  {path: 'professor', component: ProfessorDashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit', component: AdminEditComponent, canActivate: [AuthGuard]},
  {path: 'admin/student', component: StudentEditComponent, canActivate: [AuthGuard]},
  {path: 'admin/professor', component: ProfessorEditComponent, canActivate: [AuthGuard]},
  {path: 'admin/student/new', component: StudentNewComponent, canActivate: [AuthGuard]},
  {path: 'admin/professor/new', component: ProfessorNewComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'student/courses', component: StudentCourseListComponent, canActivate: [AuthGuard]},
  {path: 'professor/courses', component: ProfessorCourseListComponent, canActivate: [AuthGuard]},
  {path: 'student/courses/new', component: StudentCourseNewComponent, canActivate: [AuthGuard]},
  {path: 'professor/courses/new', component: ProfessorCourseNewComponent, canActivate: [AuthGuard]},
  {path: 'professor/courses/:cid', component: CourseEditComponent, canActivate: [AuthGuard]},
  {path: 'student/courses/:cid', component: RatingComponent, canActivate: [AuthGuard]},
  {path: 'topcourses', component: TopCoursesComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
