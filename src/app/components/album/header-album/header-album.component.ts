import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { MusicSearchPage} from '../../../music/music-search/music-search.page';

@Component({
  selector: 'app-header-album',
  templateUrl: './header-album.component.html',
  styleUrls: ['./header-album.component.scss'],
})
export class HeaderAlbumComponent implements OnInit {
 
  constructor(
    private modalController: ModalController,
) { }

    async openSearchModal() {
      console.log("openModal");
      const modal = await this.modalController.create({
        component: MusicSearchPage,
        componentProps: {
        }
      });
      return await modal.present();
    }

  ngOnInit() {
 
  }

}
