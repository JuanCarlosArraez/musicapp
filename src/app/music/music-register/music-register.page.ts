import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController  } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-music-register',
  templateUrl: './music-register.page.html',
  styleUrls: ['./music-register.page.scss'],
})
export class MusicRegisterPage implements OnInit {
  userId: string;

  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth, 
    private authSvc: AuthService,
    private router: Router, 
    public toastController: ToastController,
    )
    { 
    this.afAuth.authState.subscribe(user => {
    if (user) {
    this.userId = user.uid;
    }
    });
  }
      
  async toastusuarioyaregistrado() {
    const toast = await this.toastController.create({
      message: 'Ya has registrado una cuenta con este Email.',
      duration: 2000,
      cssClass: 'eltoast',
      color:'light',
      buttons: [
        {
        side: 'start',
        icon: 'lock-closed',
        }
        ]
     });
    toast.present();

    }



  async onRegister(email, password) {
  try {
  const user = await this.authSvc.register(email.value, password.value);
  if (user) {
      const isVerified = this.authSvc.isEmailVerified(user);
      this.redirectUser(isVerified);
      return  this.firestore.collection<any>('users').doc(this.userId).set({
      
        Password: password.value,
        rol: "cliente",
        Intro: "False",
        createdTime: new Date()
    });
    }
    }
    catch (error) {
    /*   console.log('Error', error); */
    }
    }

    
  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['music-login']);
      
    } else {
      this.router.navigate(['music-verifyemail']);
    }
  }

  ngOnInit() {
  }

}
