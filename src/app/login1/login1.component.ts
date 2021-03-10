import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  
  email?:any;
  username?:any;
  password?:any;

  constructor() { }

  ngOnInit(): void {
  

}
OnLogin1FormSubmit(Form:any)
{
  console.log("Login1 Form Submited");
  console.log(Form);
}

}
