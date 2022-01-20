import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"user",component:UserdashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
