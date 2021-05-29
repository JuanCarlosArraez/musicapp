import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../../shared/user.interface';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-music-login',
  templateUrl: './music-login.page.html',
  styleUrls: ['./music-login.page.scss'],
})
export class MusicLoginPage implements OnInit {

  userId: string;
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(  public afAuth: AngularFireAuth, 
    private authSvc: AuthService, 
    private router: Router,
    public toastController: ToastController)
     {
      this.afAuth.authState.subscribe(user => {
        if (user) {
           this.userId = user.uid;
        }
      })
     }

     async toastdatosincompatibles() {
      const toast = await this.toastController.create({
        message: 'Algunos datos suministrados son incorrectos.',
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

  async onLogin(email, password) {/* 
    localStorage.setItem('showSpinner', 'true'); */ 
    try {
      
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
     /*    this.showSpinner = true;
        localStorage.setItem('showSpinner', 'true'); */
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      
      }
    } catch (error) {
      this.toastdatosincompatibles();
    }
  }




  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['/folder/Inicio']);

    } else {
      this.router.navigate(['music-verifyemail']);
    }
  }


  ngOnInit() {
  }

}
