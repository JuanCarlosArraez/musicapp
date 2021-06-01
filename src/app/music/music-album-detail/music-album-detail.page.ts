import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-music-album-detail',
  templateUrl: './music-album-detail.page.html',
  styleUrls: ['./music-album-detail.page.scss'],
})
export class MusicAlbumDetailPage implements OnInit {

  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;
  itemId: any;

  constructor(
    public  musicservice: MusicService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
  ) { 
    this.itemId = this.activatedRoute.snapshot.paramMap.get('albumId');
  }

  
  
  async ngOnInit() {

    this.item =  await this.musicservice.getAlbumsDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });
    console.log( this.itemArray)
  }

}
