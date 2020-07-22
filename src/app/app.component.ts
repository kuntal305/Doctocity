import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private auth: AuthService, private userService:  UserService) {
    auth.user$.subscribe(user => {  
      console.log("afterlogin " + user);
      if (user) {
        console.log(user);
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        console.log(returnUrl);
        
        router.navigateByUrl(returnUrl); 
      }
    })
  }
  
  onShow() {
    if(this.router.url === "/adminprofile/doctor" || this.router.url === "/adminprofile/clinic") 
      return false;
    else 
      return true;
  }

}
