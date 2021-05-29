import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MusicService  } from '../../../services/music.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {

  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
   /*  autoplay: true, */
  };

  Rockbands: Observable<any[]>;
  
  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;

  itemId: any;

  constructor(public  musicservice: MusicService,
    public router: Router,) { }

  getRockbands(){
    this.Rockbands = this.musicservice.getBandsRecommended();
  }
  openDetail(url,itemId){
    this.router.navigateByUrl('/'+url+'/'+itemId);
  }
  async ngOnInit() {this.getRockbands();
  }

}
