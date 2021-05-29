import { User } from '../../shared/user.interface';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-music-verifyemail',
  templateUrl: './music-verifyemail.page.html',
  styleUrls: ['./music-verifyemail.page.scss'],
})
export class MusicVerifyemailPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(
    private authSvc: AuthService,
    private router: Router,
  ) 
  {  }


async onSendEmail(): Promise<void> {
try 
{
await this.authSvc.sendVerifcationEmail();
} 
catch (error) {
console.log('Error->', error);
}
}

ngOnDestroy(): void {
this.authSvc.logout();
}


ngOnInit() {
  
setTimeout((router: Router) => {
this.router.navigate(['/music-login']);
}, 6000); 

}

}
