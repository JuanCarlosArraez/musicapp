import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'musical-notes' },
    { title: 'Rock Bands ', url: '/folder/Rock Bands', icon: 'skull' },
    { title: 'Albums', url: '/music-list/Albums', icon: 'albums' },
  ];
  constructor( 
    public authSvc: AuthService,
    public router: Router,) {}

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/music-login']);
    } catch (error) {
      console.log(error);
    }
  }
}
