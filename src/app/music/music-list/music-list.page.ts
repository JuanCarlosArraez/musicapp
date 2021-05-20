import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.page.html',
  styleUrls: ['./music-list.page.scss'],
})
export class MusicListPage implements OnInit {
  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;

  itemId: any;

   Bands: Observable<any[]>; 
   
  constructor(public  musicservice: MusicService,
    private activatedRoute: ActivatedRoute,)
   {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('bandsId');
    }

  async ngOnInit() {
    this.item =  await this.musicservice.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });
    this.Bands = this.musicservice.getBands();
  }

}
