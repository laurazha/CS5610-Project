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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'student/courses', component: StudentCourseListComponent},
  {path: 'professor/courses', component: ProfessorCourseListComponent},
  {path: 'student/courses/new', component: StudentCourseNewComponent},
  {path: 'professor/courses/new', component: ProfessorCourseNewComponent},
  {path: 'professor/courses/edit', component: CourseEditComponent},
  {path: 'student/courses/rate', component: RatingComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
