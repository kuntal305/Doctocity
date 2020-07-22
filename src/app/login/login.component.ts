import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent {


  constructor(private router: Router, private authService: AuthService ) {}

  googleLogin() {
    this.authService.signInWithGoogle();
  }  
  
  facebookLogin() {
    this.authService.signInWithFacebook();
  }

}