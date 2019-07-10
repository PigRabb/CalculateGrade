import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from '../app/service/auth.service'

var firebaseConfig = {
  apiKey: "AIzaSyDKN3b-PJd64scxhjFSnK5J1IkXXpu5q7s",
  authDomain: "cs-project-646a9.firebaseapp.com",
  databaseURL: "https://cs-project-646a9.firebaseio.com",
  projectId: "cs-project-646a9",
  storageBucket: "",
  messagingSenderId: "85979237557",
  appId: "1:85979237557:web:3755ad8237496296"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
