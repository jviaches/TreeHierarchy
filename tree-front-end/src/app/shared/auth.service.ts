import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { firebase } from '@firebase/app'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked! ' + value);
        //this.router.navigateByUrl('/profile');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);        
      });
  }


  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucess', value);
        //this.router.navigateByUrl('/profile');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }


  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        console.log('Sucess', value),
          console.log('The given name is ' + value.additionalUserInfo.profile.given_name);//,
          //this.router.navigateByUrl('/profile');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }


  logout() {
    this.afAuth.auth.signOut().then(() => {
      //this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}