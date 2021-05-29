import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { MusicSearchPage} from '../../../music/music-search/music-search.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.scss'],
})
export class AddBandComponent implements OnInit {
  public folder: string;
  constructor(
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,) { }

  
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
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
