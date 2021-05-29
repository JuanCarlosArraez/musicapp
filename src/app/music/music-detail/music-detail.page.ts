import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.page.html',
  styleUrls: ['./music-detail.page.scss'],
})
export class MusicDetailPage implements OnInit {


/* ---------Albums------------- */

  public Albums: Observable<any[]>;
  slideOption = {
  slidesPerView: 'auto',
  grabCursor: true,
  /*  autoplay: true, */
  };
  
/* ----------Detail---------------- */
  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;
  itemId: any;


  constructor(
    public  musicservice: MusicService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('detailId');
   }

   openDetail(url,AlbumId){
    this.router.navigateByUrl('/'+url+'/'+AlbumId);
  }

  async ngOnInit() {
    this.item =  await this.musicservice.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });

    this.Albums = this.musicservice.getItemByCatId();
  }

}
