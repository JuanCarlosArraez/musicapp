import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { MusicService  } from '../services/music.service';
import { Router} from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
public folder: string;
  categories: Observable<any[]>;
  Popular: Observable<any[]>;
  Playlists: Observable<any[]>;
  Song:any;


  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
   /*  autoplay: true, */
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    public  musicservice: MusicService,
    public router: Router,
    private statusBar: StatusBar,
    private nativeAudio: NativeAudio
    ) {
     }

  getPlaylists(){
  this.Playlists = this.musicservice.getPlaylists();
  }

  getCategory(){
    this.categories = this.musicservice.getPopular();
  }

  getPopularSong(){
    this.Popular = this.musicservice.getPopularSong();
  }
  
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }

  getSong(){
    this.musicservice.getPlaylists().subscribe(x => {
    x.map(y => {
    this.Song=  y.music 
   });
   });
   return this.Song;
   }

  play(){
    this.nativeAudio.preloadSimple('uniqueId1', this.Song)
    this.nativeAudio.play('uniqueId1')
  }

  stop(){
  this.nativeAudio.stop('uniqueId1');
  }


///////////////////////////////////////////////////////////////////

/* agg(number:number)
{
return  this.firestore.collection<any>('music_playlists').add({
Available: "si",
Visible:  "si",

image: "",
name:"",
year: number = 1998,
rating: number=4,
recommended: false,
description:""
});
} */

/* agg(number:number)
{
return  this.firestore.collection<any>('music_popular').add({
Available: "si",
Visible:  "si",

music_categoryId: "",
music_category_name:"",
image: "",
name:"",
year: number = 1998,
rating: number=4,
recommended: false,
description:"",
short_description:""
});
}
 */
agg(number:number)
{
return  this.firestore.collection<any>('music_bands').add({
Available: "si",
Visible:  "si",

music_categoryId: "",
music_category_name:"",
image: "",
name:"",
year: number = 1998,
rating: number=4,
recommended: false,
description:"",
short_description:""
});
}




///////////////////////////////////////////////////////////////////
 async ngOnInit() {
    this.getSong();
    this.getPlaylists();
    this.getPopularSong();
    this.getCategory();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.statusBar.backgroundColorByHexString('#ff4500');
  }

}
