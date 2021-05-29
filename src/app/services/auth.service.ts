import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;
  userId: string;
  email:string;
  emailVerified:boolean;

  constructor(
    public afAuth: AngularFireAuth, 
    private afs: AngularFirestore,
    public platform: Platform,
    public toastController: ToastController,
    private router: Router, ) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
         this.userId = user.uid;
         this.email=user.email;
         this.emailVerified =user.emailVerified;
      }
    }); 

        this.user$ = this.afAuth.authState.pipe(
        switchMap((user) => {
        if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
        })
    );
  }


  

async toastusuarioyaregistrado() {
  const toast = await this.toastController.create({
    message: 'Ya te has registrado con este Email.',
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


async toastinvalidpassword() {
const toast = await this.toastController.create({
  message: 'Contraseña invalida.',
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

async toastinvalidemail() {
  const toast = await this.toastController.create({
  message: 'Regístrate antes de ingresar.',
  duration: 2000,
  cssClass: 'eltoastregister',color:'light',
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
async toastpasswordweak() {
const toast = await this.toastController.create({
   message: 'La clave debe de contener al menos 6 caracteres.',
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


async register(email: string, password: string): Promise<User> {
try 
{
const { user } = await  this.afAuth.createUserWithEmailAndPassword(email, password);
await this.sendVerifcationEmail();
return user;
} 
catch (error) 
{
    if (error.code=== 'auth/invalid-email') {
      this.toastemailincorrecto();
      this.router.navigate(['/register']); 
    }
    if (error.code=== 'auth/email-already-in-use') {
      this.toastusuarioyaregistrado() ;
      this.router.navigate(['/register']); 
    }
    if (error.code=== 'auth/weak-password') {
      this.toastpasswordweak() ;
      this.router.navigate(['/register']); 
    }
  }
}

async login(email: string, password: string): Promise<User> {
try {
const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
this.updateUserData(user);
return user;
} 
catch (error)
 {
    if (error.code=== 'auth/invalid-email') {
      this.toastemailincorrecto();
      this.router.navigate(['/login']); 
    }
    
    if (error.code=== 'auth/wrong-password') {
      this.toastinvalidpassword();
      this.router.navigate(['/login']); 
    }
    if (error.code=== 'auth/user-not-found' ) {
      this.toastinvalidemail();
      this.router.navigate(['/login']); 
    }
/*      console.log('Error->', error); */
    
  }
}

async sendVerifcationEmail(): Promise<void> {
try 
{
return (await this.afAuth.currentUser).sendEmailVerification();
} 
catch (error) 
{
console.log('Error->', error);
}
}



isEmailVerified(user: User): boolean {
return user.emailVerified === true ? true : false;
}



async resetPassword(email: string): Promise<void> {
try {
return this.afAuth.sendPasswordResetEmail(email);
} 
catch (error) {
console.log('Error->', error);
}
}

async logout(): Promise<void> {
try {
await this.afAuth.signOut();
} catch (error) 
{
console.log('Error->', error);
}
}

public updateUserData(user: User) {
const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

const data: User = {
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
  };
return userRef.set(data, { merge: true });
}


  
}
