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

  public Items: Observable<any[]>;
slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
   /*  autoplay: true, */
  };

  constructor(
    public  musicservice: MusicService,
    public router: Router) { 
    }

    openDetail(url,itemId){
      this.router.navigateByUrl('/'+url+'/'+itemId);
    }
  ngOnInit() {
    this.Items = this.musicservice.getItemByCatId();
  }

}
