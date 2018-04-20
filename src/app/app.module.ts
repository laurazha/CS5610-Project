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
import { TopCoursesComponent } from './views/home/top-courses/top-courses.component';
import {SharedService} from './services/shared.service';
import {UserService} from './services/user.service.client';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './services/auth-guard.service';
import {HttpModule} from '@angular/http';
import { ProfessorDashboardComponent } from './views/user/professor/professor-dashboard/professor-dashboard.component';
import { StudentDashboardComponent } from './views/user/student/student-dashboard/student-dashboard.component';
import {AdminDashboardComponent} from './views/user/admin/admin-dashboard/admin-dashboard.component';
import {ProfessorNewComponent} from './views/user/admin/professor-new/professor-new.component';
import {ProfessorEditComponent} from './views/user/admin/professor-edit/professor-edit.component';
import {StudentEditComponent} from './views/user/admin/student-edit/student-edit.component';
import {StudentNewComponent} from './views/user/admin/student-new/student-new.component';
import {CourseService} from './services/course.service.client';
import { AdminEditComponent } from './views/user/admin/admin-edit/admin-edit.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetHtmlComponent } from './views/widget/widget-edit/widget-html/widget-html.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetViewComponent } from './views/widget/widget-view/widget-view.component';
import {SortableDirective} from './directives/sortable.directive';
import {SafePipe} from './pipes/safe.pipe';
import {WidgetService} from './services/widget.service.client';
import { QuillEditorModule } from 'ngx-quill-editor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    ProfessorNewComponent,
    HomeComponent,
    RegisterComponent,
    StudentCourseListComponent,
    ProfessorCourseListComponent,
    ProfessorCourseNewComponent,
    CourseEditComponent,
    StudentCourseNewComponent,
    RatingComponent,
    TopCoursesComponent,
    ProfessorEditComponent,
    ProfessorNewComponent,
    StudentEditComponent,
    StudentNewComponent,
    ProfessorDashboardComponent,
    StudentDashboardComponent,
    AdminEditComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetHtmlComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetViewComponent,
    SafePipe,
    SortableDirective,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    QuillEditorModule
  ],
  providers: [UserService, CourseService, SharedService, AuthGuard, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
