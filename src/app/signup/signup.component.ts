import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private af: AngularFireAuth) { }

  ngOnInit() {
    
  }

  onRegister(credentials) {
    this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => {
        if(user ){
          user.updateProfile({
            displayName: credentials.firstname + " " + credentials.lastname
          })
            .then(updatedUser => console.log(updatedUser));
            
        }
      })
      .catch(err => console.log(err));
  }

}
