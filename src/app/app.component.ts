import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';

  constructor(
    public auth: AngularFireAuth
  ) {}

  signInClick(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  signOutClick(): void {
    this.auth.signOut();
  }
}