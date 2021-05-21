import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.page.html',
  styleUrls: ['./music-list.page.scss'],
})
export class MusicListPage implements OnInit {
  items: Observable<any>;
  itemId: any;

   Bands: Observable<any[]>; 
   
  constructor(
    public router: Router,
    public  musicservice: MusicService,
    private activatedRoute: ActivatedRoute,)
   {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('bandsId');
    }

  async ngOnInit() {
  
    this.items = this.musicservice.getItemByCatId(this.itemId);
    this.Bands = this.musicservice.getBands();
  }

}
