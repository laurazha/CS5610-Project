import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/home/login/login.component';
import {routing} from './app.routing';
import { HomeComponent } from './views/home/home/home.component';
import { RegisterComponent } from './views/home/register/register.component';
import { StudentCourseListComponent } from './views/course/student/student-course-list/student-course-list.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import {StudentCourseNewComponent} from './views/course/student/student-course-new/student-course-new.component';
import {RatingComponent} from './views/course/student/rating/rating.component';
import {ProfessorCourseNewComponent} from './views/course/professor/professor-course-new/professor-course-new.component';
import {ProfessorCourseListComponent} from './views/course/professor/professor-course-list/professor-course-list.component';
import {CourseEditComponent} from './views/course/professor/course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    StudentCourseListComponent,
    ProfessorCourseListComponent,
    WidgetListComponent,
    ProfessorCourseNewComponent,
    CourseEditComponent,
    StudentCourseNewComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
