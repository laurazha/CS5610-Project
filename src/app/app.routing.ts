import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './views/home/login/login.component';
import {HomeComponent} from './views/home/home/home.component';
import {RegisterComponent} from './views/home/register/register.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
