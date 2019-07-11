import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule} from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from '../app/service/auth.service';
import { MainComponent } from './main/main.component';
import { GTabelComponent } from './main/g-tabel/g-tabel.component'
import { FireDatabaseService } from './service/fire-database.service';
import { ForecastGComponent } from './forecast-g/forecast-g.component';
import { TabelGradeForcastComponent } from './forecast-g/tabel-grade-forcast/tabel-grade-forcast.component';

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
    MainComponent,
    GTabelComponent,
    ForecastGComponent,
    TabelGradeForcastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService,FireDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
