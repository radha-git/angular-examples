import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Employee1Component } from './employee1/employee1.component';
import { Login1Component } from './login1/login1.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { StudentComponent } from './student/student.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginformComponent
  },
  {
    path:'signup',
    component:SignupformComponent
  },
  {
    path:'login1',
    component:Login1Component
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path:'employee1',
    component:Employee1Component
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'registerform',
    component:RegisterformComponent
  },
  {
    path:'website',
    component:WebsiteComponent
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
