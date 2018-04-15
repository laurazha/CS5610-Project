import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/home/login/login.component';
import {routing} from './app.routing';

import { StudentDashboardComponentComponent } from './views/user/student/student-dashboard-component/student-dashboard-component.component';
import { ProfessorDashboardComponentComponent } from './views/user/professor/professor-dashboard-component/professor-dashboard-component.component';
import { AdminDashboardComponentComponent } from './views/user/admin/admin-dashboard-component/admin-dashboard-component.component';
import { ReservationComponentComponent } from './views/user/student/reservation-component/reservation-component.component';
import {StudentEditComponentComponent} from './views/user/admin/student-edit-component/student-edit-component.component';
import {ProfessorEditComponentComponent} from './views/user/admin/professor-edit-component/professor-edit-component.component';
import { StudentNewComponentComponent } from './views/user/admin/student-new-component/student-new-component.component';
import { ProfessorNewComponentComponent } from './views/user/admin/professor-new-component/professor-new-component.component';
import { HomeComponent } from './views/home/home/home.component';
import { RegisterComponent } from './views/home/register/register.component';
import { TopCoursesComponent } from './views/home/top-courses/top-courses.component';
import {SharedService} from './services/shared.service';
import {UserService} from './services/user.service.client';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './services/auth-guard.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashboardComponentComponent,
    ProfessorDashboardComponentComponent,
    AdminDashboardComponentComponent,
    StudentEditComponentComponent,
    ProfessorEditComponentComponent,
    ReservationComponentComponent,
    StudentNewComponentComponent,
    ProfessorNewComponentComponent,
    HomeComponent,
    RegisterComponent,
    TopCoursesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
