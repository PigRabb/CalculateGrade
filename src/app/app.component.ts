import { Component } from '@angular/core';
import { AuthService } from '../app/service/auth.service'
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculate-my-grade';
  LoginStatus: boolean
  LoginStatus1: boolean
  uid: string;
  Name: any;
  statusMenu1: boolean;
  statusMenu2: boolean;

  constructor(
    public authService: AuthService, public afAuth: AngularFireAuth
  ) {
   
    console.log(localStorage.getItem('uid').length)
    if (localStorage.getItem('uid').length >= 5) {
      this.LoginStatus = true;
      this.Name = localStorage.getItem('name')
      this.LoginStatus1 = false;
      this.statusMenu1 = true;
    }
    else {
      this.LoginStatus = false;
      this.LoginStatus1 = true;
    }
    


  }

  auth() {
    this.authService.GoogleAuth().then(data => {
      if (this.afAuth.auth.currentUser.uid != null || this.afAuth.auth.currentUser.uid.length > 0) {
        this.LoginStatus = true;
        this.LoginStatus1 = false;
      }
    });
    console.log(this.afAuth.auth.currentUser.uid)
  }

  Logout() {
    this.authService.SignOut();
    this.LoginStatus = false;
    this.LoginStatus1 = true;
  }

  gotoMenu(menu: any) {
    if (menu == 1) {
      this.statusMenu1 = true;
      this.statusMenu2 = false;
    }
    else if (menu == 2) {
      this.statusMenu1 = false;
      this.statusMenu2 = true;
    }


  }
}



