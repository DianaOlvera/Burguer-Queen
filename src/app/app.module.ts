import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { MuroComponent } from './muro/muro.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MuroComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireModule,
    NgbModule,
    FirebaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
