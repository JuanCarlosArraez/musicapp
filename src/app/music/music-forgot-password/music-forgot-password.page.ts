import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-music-forgot-password',
  templateUrl: './music-forgot-password.page.html',
  styleUrls: ['./music-forgot-password.page.scss'],
})
export class MusicForgotPasswordPage implements OnInit {

  constructor(
    private authSvc: AuthService, 
    private router: Router,
    public toastController: ToastController,
  ) { }

  
  async toastemailincorrecto() {
    const toast = await this.toastController.create({
      message: 'Ingresa un Email válido',
      duration: 2000,
      cssClass: 'eltoastregister',
      color:'light',
      position: 'top',
      buttons: [
        {
        side: 'start',
        icon: 'lock-closed',
        }
        ]
     });
    toast.present();

    }

    async toastresetpassword() {
      const toast = await this.toastController.create({
        message: 'Debes estar registrado primero.',
        duration: 2000,
        cssClass: 'eltoastregister',
        color:'light',
        position: 'top',
        buttons: [
          {
          side: 'start',
          icon: 'lock-closed',
          }
          ]
       });
      toast.present();
  
      }




async onResetPassword(email) {
try {
await this.authSvc.resetPassword(email.value);
this.router.navigate(['/music-login']);
} catch (error) {
      
      
if (error.code=== 'auth/invalid-email') {
this.toastemailincorrecto();
this.router.navigate(['/forgot-password']); 
}
if (error.code=== 'auth/user-not-found') {
this.toastresetpassword();
this.router.navigate(['/forgot-password']); 
}
 /*  console.log('Error->', error); */
}
}

  ngOnInit() {
  }

}
