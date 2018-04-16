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
<<<<<<< HEAD
=======
import {StudentDashboardComponent} from './views/user/student/student-dashboard/student-dashboard.component';
import {ProfessorDashboardComponent} from './views/user/professor/professor-dashboard/professor-dashboard.component';
import {AdminDashboardComponent} from './views/user/admin/admin-dashboard/admin-dashboard.component';
import {StudentEditComponent} from './views/user/admin/student-edit/student-edit.component';
import {ProfessorEditComponent} from './views/user/admin/professor-edit/professor-edit.component';
import {StudentNewComponent} from './views/user/admin/student-new/student-new.component';
import {ProfessorNewComponent} from './views/user/admin/professor-new/professor-new.component';
>>>>>>> refs/remotes/origin/master

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentDashboardComponent},
  {path: 'professor', component: ProfessorDashboardComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'admin/student', component: StudentEditComponent},
  {path: 'admin/professor', component: ProfessorEditComponent},
  {path: 'admin/student/new', component: StudentNewComponent},
  {path: 'admin/professor/new', component: ProfessorNewComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'student/courses', component: StudentCourseListComponent},
  {path: 'professor/courses', component: ProfessorCourseListComponent},
  {path: 'student/courses/new', component: StudentCourseNewComponent},
  {path: 'professor/courses/new', component: ProfessorCourseNewComponent},
  {path: 'professor/courses/edit', component: CourseEditComponent},
  {path: 'student/courses/rate', component: RatingComponent},
  {path: 'topcourses', component: TopCoursesComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
