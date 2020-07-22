import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class AuthService {

  user$: Observable<firebase.User>
  doctors$: Observable<any>;
  doctors;

  constructor(private router: Router, private afAuth: AngularFireAuth, private route: ActivatedRoute, private db: AngularFireDatabase) { 
    this.user$ = afAuth.authState;

  }
  
  

  signInWithGoogle() {
    
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    
    // console.log(returnUrl);
    if (returnUrl)
      localStorage.setItem('returnUrl', returnUrl);
    else  
      localStorage.setItem('returnUrl','/');

    

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
    

  }

  signInWithFacebook() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

    // console.log(returnUrl);
    if (returnUrl)
      localStorage.setItem('returnUrl', returnUrl);
    else
      localStorage.setItem('returnUrl', '/home');

    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()); 
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(success => {
        this.router.navigateByUrl('/login')
      });
  }

  fetchDoctors(location, speciality: string) {
    return this.db.list('/doctors/' + speciality).valueChanges();
  }
}
