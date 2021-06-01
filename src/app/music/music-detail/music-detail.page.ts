import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { IonicComponentService } from '../../services/ionic-component.service';
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

/*-------  Question -------------- */
  caption1:any;
  caption2: string;
  redirect:any;

  constructor(
    public  musicservice: MusicService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private ionicComponentService: IonicComponentService
  ) {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('detailId');
   }

   openDetail(url,AlbumId){
    this.router.navigateByUrl('/'+url+'/'+AlbumId);
  }

  openEdit(){
    this.router.navigateByUrl('/music-detail-edit/'+this.itemId);
  }
 
  Question(){
    this.musicservice.getAlbums().forEach(item => {
      this.caption1= Object.keys(item).map(key=>item[key]).map(order =>  {
    /*  console.log(order.music_categoryId) */
    return   order.music_categoryId
   });
   if (this.caption1.indexOf(this.itemId) === -1){
     this.caption2="Albums not available."
    console.log(this.caption2)
    return this.caption1;
   }
   })
   }

  
   async close(){
   this.redirect=this.router.navigateByUrl('/folder/Inicio');
   await this.redirect;
   }

   async deleteBand(){
    this.ionicComponentService.presentLoading();
   await this.musicservice.deleteBand(this.itemId)
   .then(  () => {
     // call loading 
    this.ionicComponentService.dismissLoading();
    this.close();
   },
    (error) => { 
      var errorMessage: string = error.message;
      console.log("ERROR:"+errorMessage);
      
      this.ionicComponentService.dismissLoading();
      this.ionicComponentService.presentToast(errorMessage,4000);  
   });
   }

  async ngOnInit() {
    this.item =  await this.musicservice.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });
    this.Question();
    this.Albums = this.musicservice.getItemByCatId();
  }

}
