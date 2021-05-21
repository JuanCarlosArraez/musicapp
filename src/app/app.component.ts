import { Component } from '@angular/core';
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
   /*  { title: 'Agregar Banda', url: '/folder/Agregar Banda', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' }, */
  ];
/*   public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; */
  constructor() {}
}
