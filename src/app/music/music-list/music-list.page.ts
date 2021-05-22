import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.page.html',
  styleUrls: ['./music-list.page.scss'],
})
export class MusicListPage implements OnInit {

   
  constructor(
    public router: Router,
    public  musicservice: MusicService,
  )
   {
    }

  async ngOnInit() {
  
  }

}
