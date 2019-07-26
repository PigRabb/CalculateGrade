import { Component } from '@angular/core';
import { AuthService } from '../app/service/auth.service'
import { AngularFireAuth } from "@angular/fire/auth";
import { flatMap } from 'rxjs/operators';

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
    
    if (localStorage.getItem('LogStastus')) {
         if(localStorage.getItem('LogStastus')=="1"){
          this.LoginStatus1 = false
          this.LoginStatus = true
         }else{
          this.LoginStatus1 = true
          this.LoginStatus = false
         }
    }else{
      this.LoginStatus1 = true
      this.LoginStatus = false
      }

    

  }

  async ngOnInit() {
    if (localStorage.getItem('uid') == null || localStorage.getItem('uid') == undefined) {
      localStorage.setItem('name', null);
      localStorage.setItem('email', null);
      localStorage.setItem('uid', null);
    }
    else {
      if (localStorage.getItem('uid').length >= 5) {
        this.LoginStatus = true;
        localStorage.setItem("LogStastus","1")
        this.Name = await localStorage.getItem('name')
        this.LoginStatus1 = false;
        this.statusMenu1 = true;
      }
      else {
        this.LoginStatus = false;
        this.LoginStatus1 = true;
      }
    }
  }

   async auth() {
    await  this.authService.GoogleAuth().then(async data => {
      if (await this.afAuth.auth.currentUser.uid != null ||await this.afAuth.auth.currentUser.uid.length > 0) {
        this.LoginStatus = true;
        this.LoginStatus1 = false;
        this.statusMenu1 = true;
        this.statusMenu2 = false;
      }
    });

  }

  Logout() {
    this.authService.SignOut();
    localStorage.setItem("LogStastus","0")
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



