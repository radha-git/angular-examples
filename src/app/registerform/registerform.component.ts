import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  Register(form:any)
  {
    console.log("You are successfully registered")
    console.log(form);
  }
}
