import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  styleUrls: ['./loginform.component.css'],
  templateUrl: './loginform.component.html'
})
export class LoginformComponent implements OnInit {


  username?: string;
  password?: string;

  constructor() { }

  ngOnInit(): void {
//    this.username = 'radha';
 //   this.password = 'asadas';
  }

  onLoginFormSubmit(form:any)
  {
    console.log("Login Form Submited");
    console.log(form);
  }

}
