import { Component, OnInit } from '@angular/core';
import { MusicService  } from '../../../services/music.service';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent implements OnInit {



  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
   /*  autoplay: true, */
  };


  Popular: Observable<any[]>;
  constructor(   
    private activatedRoute: ActivatedRoute,
    public  musicservice: MusicService,
    private firestore: AngularFirestore,
    public router: Router,
    ) {
   
     }
     openDetail(url,itemId){
      this.router.navigateByUrl('/'+url+'/'+itemId);
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
 */
agg(number:number)
{
return  this.firestore.collection<any>('music_albums').add({
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

  getPopularSong(){
    this.Popular = this.musicservice.getPopularSong();
  }
  
  async ngOnInit() {

    this.getPopularSong();

  }

}
