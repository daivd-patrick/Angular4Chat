import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyALRYixD74st8o20Xc_Q8Vaq9d_34VXSxc",
  authDomain: "myangularchat-e4035.firebaseapp.com",
  databaseURL: "https://myangularchat-e4035.firebaseio.com",
  projectId: "myangularchat-e4035",
  storageBucket: "myangularchat-e4035.appspot.com",
  messagingSenderId: "437182128499"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }