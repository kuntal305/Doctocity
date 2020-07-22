import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { BooksucessComponent } from './booksucess/booksucess.component';
import { TestsComponent } from './tests/tests.component';
import { BooktestComponent } from './booktest/booktest.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DoctorprofileComponent } from './adminprofile/doctorprofile/doctorprofile.component';
import { ClinicprofileComponent } from './adminprofile/clinicprofile/clinicprofile.component';
import { DoctorNotificationsComponent } from './adminprofile/doctorprofile/notifications/notifications.component';
import { DoctorProfileComponent } from './adminprofile/doctorprofile/profile/profile.component';
import { ClinicnotificationsComponent } from './adminprofile/clinicprofile/clinicnotifications/clinicnotifications.component';
import { ClinicdetailsComponent } from './adminprofile/clinicprofile/clinicdetails/clinicdetails.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ClinichomeComponent } from './adminprofile/clinicprofile/clinichome/clinichome.component';
import { DoctorhomeComponent } from './adminprofile/doctorprofile/doctorhome/doctorhome.component';
import { DoctorsignupComponent } from './adminsignup/doctorsignup/doctorsignup.component';
import { ClinicsignupComponent } from './adminsignup/clinicsignup/clinicsignup.component';


import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    DoctorsComponent,
    DiagnosticsComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    BookappointmentComponent,
    BooksucessComponent,
    TestsComponent,
    BooktestComponent,
    AdminloginComponent,
    DoctorprofileComponent,
    ClinicprofileComponent,
    DoctorNotificationsComponent,
    DoctorProfileComponent,
    ClinicnotificationsComponent,
    ClinicdetailsComponent,
    AdminsignupComponent,
    ClinichomeComponent,
    DoctorhomeComponent,
    DoctorsignupComponent,
    ClinicsignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent 
      },
      {
        path: 'home',
        component: HomepageComponent 
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:  'adminlogin',
        component: AdminloginComponent
      },
      {
        path: 'adminsignup',
        component: AdminsignupComponent
      },
      {
        path: 'doctorsignup',
        component: DoctorsignupComponent
      },
      {
        path: 'clinicsignup',
        component: ClinicsignupComponent
      },


      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'diagnostics',
        component: DiagnosticsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'tests',
        component: TestsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'booktest',
        component: BooktestComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'doctors/book',
        component: BookappointmentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'success',
        component: BooksucessComponent,
        canActivate: [AuthGuard]
      },

      
      {
        path: 'adminprofile/doctor',
        component: DoctorprofileComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'adminprofile/clinic',
        component: ClinicprofileComponent,
        // canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
