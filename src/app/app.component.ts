import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  user: Observable<firebase.User>;
  name: any;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

    // limit to last 5 messages
    this.items = af.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    // get user authentication state
    this.user = this.afAuth.authState;

  }

  // login from Facebook using a popup
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  // logout 
  logout() {
    this.afAuth.auth.signOut();
  }

  chatSend(theirMessage: string) {
      this.items.push({ message: theirMessage, name: 'User'});
      this.msgVal = '';
  }
}