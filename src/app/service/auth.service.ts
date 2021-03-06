import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  count = 0;
  userStatus: boolean
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.count++;
    console.log(this.count)

    /*this.doSomething().then(data =>{
      if(this.userStatus ==false){
        localStorage.setItem('name', null);
        localStorage.setItem('email', null);
        localStorage.setItem('uid',null);
 
      }
    })*/

    /* Saving user data as an object in localstorage if logged out than set to null */
    this.afAuth.authState.subscribe(user => {
      console.log("data = " + user.metadata)
      if (user) {
        localStorage.setItem('name', user.displayName);
        localStorage.setItem('email', user.email);
        localStorage.setItem('uid', user.uid);
      } else {
        localStorage.setItem('name', null);
        localStorage.setItem('email', null);
        localStorage.setItem('uid', null);
      }
    })
  }







  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async SignIn(email, password) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })

  }

  // Sign in with Google
  async GoogleAuth() {
    return await this.AuthLogin(new auth.GoogleAuthProvider());
  }

  relogin() {
    this.afAuth.auth.signInAndRetrieveDataWithCredential(JSON.parse(localStorage.getItem('CAT')));
  }
  // Auth logic to run auth providers
  async AuthLogin(provider) {
    return await this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.afAuth.auth.currentUser.getIdToken().then(token => {
          localStorage.setItem("CAT", JSON.stringify(result.credential.toJSON()))
        })
        this.ngZone.run((data) => {

          this.router.navigate(['dashboard']);
        })
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('uid');
      localStorage.removeItem('CAT');
      this.router.navigate(['sign-in']);
    })
  }

}
