import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myimage:string = "assets/images/sigmund-eTgMFFzroGc-unsplash.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
