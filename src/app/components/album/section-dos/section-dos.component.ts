import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicService  } from '../../../services/music.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-section-dos',
  templateUrl: './section-dos.component.html',
  styleUrls: ['./section-dos.component.scss'],
})
export class SectionDosComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(
    public  musicservice: MusicService,
    public router: Router,
    private activatedRoute: ActivatedRoute,) { 
    }
    openDetail(url,itemId){
      this.router.navigateByUrl('/'+url+'/'+itemId);
    }
  ngOnInit() {
    this.items = this.musicservice.getItemByCatId();
  }

}
