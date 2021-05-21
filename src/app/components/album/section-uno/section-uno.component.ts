import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MusicService  } from '../../../services/music.service';


@Component({
  selector: 'app-section-uno',
  templateUrl: './section-uno.component.html',
  styleUrls: ['./section-uno.component.scss'],
})
export class SectionUnoComponent implements OnInit {

  Albums: Observable<any[]>;
  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
   /*  autoplay: true, */
  };

  constructor(
  public  musicservice: MusicService) 
  { 

  }

  getAlbum(){
    this.Albums = this.musicservice.getAlbums();
  }

  ngOnInit() {
    this.getAlbum();
  }

}
