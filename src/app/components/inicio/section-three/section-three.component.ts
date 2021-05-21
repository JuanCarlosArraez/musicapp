import { Component, OnInit } from '@angular/core';
import { MusicService  } from '../../../services/music.service';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
})
export class SectionThreeComponent implements OnInit {

  Playlists: Observable<any[]>;
  Song:any;

  constructor(
    public router: Router,
    public  musicservice: MusicService,
    ) { }

  getPlaylists(){
    this.Playlists = this.musicservice.getPlaylists();
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

  ngOnInit() {
    this.getSong();
    this.getPlaylists();
  }

}
