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
  LoginStatus : boolean
  LoginStatus1 : boolean
  uid : string;
  constructor(
    public authService: AuthService,public afAuth: AngularFireAuth
  ) { 
    console.log(localStorage.getItem('uid').length)
    if(  localStorage.getItem('uid').length >= 5){
        this.LoginStatus = true;
        this.LoginStatus1 = false;

    }
    else {
      this.LoginStatus = false;
      this.LoginStatus1 = true;
    }
  

  }
  
  auth(){
    this.authService.GoogleAuth().then( data =>{
      if(this.afAuth.auth.currentUser.uid !=null || this.afAuth.auth.currentUser.uid.length >0){
        this.LoginStatus = true;
        this.LoginStatus1 = false;
      }
    });
    console.log(this.afAuth.auth.currentUser.uid)
  }
  Logout(){
    this.authService.SignOut();
    this.LoginStatus = false;
    this.LoginStatus1 = true;
  }
}



