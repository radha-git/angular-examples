import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { SignupformComponent } from './signupform/signupform.component';
import { Login1Component } from './login1/login1.component';
import { EmployeeComponent } from './employee/employee.component';
import { Employee1Component } from './employee1/employee1.component';
import { StudentComponent } from './student/student.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    Login1Component,
    EmployeeComponent,
    Employee1Component,
    StudentComponent,
    RegisterformComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
