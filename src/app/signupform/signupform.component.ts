import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



onsignupFormSubmit(form:any)
  {
    console.log("SignUp Form Submited");
    console.log(form);
  }
}