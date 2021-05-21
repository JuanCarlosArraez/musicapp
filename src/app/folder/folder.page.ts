import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { MusicService  } from '../services/music.service';
import { Router} from '@angular/router';
/* import { NativeAudio } from '@ionic-native/native-audio/ngx'; */
/* import { StatusBar } from '@ionic-native/status-bar/ngx'; */

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
public folder: string;



 
  constructor(
    private activatedRoute: ActivatedRoute,
    public  musicservice: MusicService,
    public router: Router,
/*     private statusBar: StatusBar, */
 /*    private nativeAudio: NativeAudio */
    ) {
     
     }



/*   play(){
    this.nativeAudio.preloadSimple('uniqueId1', this.Song)
    this.nativeAudio.play('uniqueId1')
  }

  stop(){
  this.nativeAudio.stop('uniqueId1');
  } */





///////////////////////////////////////////////////////////////////
 async ngOnInit() {

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
/*     this.statusBar.backgroundColorByHexString('#ff4500'); */
  }

}
