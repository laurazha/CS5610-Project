import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/home/login/login.component';
import {routing} from './app.routing';
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
