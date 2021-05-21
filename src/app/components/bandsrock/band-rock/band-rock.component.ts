import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService  } from '../../../services/music.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band-rock',
  templateUrl: './band-rock.component.html',
  styleUrls: ['./band-rock.component.scss'],
})
export class BandRockComponent implements OnInit {
  Bands: Observable<any[]>; 

  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;

  itemId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public  musicservice: MusicService,
  ) { 
    this.itemId = this.activatedRoute.snapshot.paramMap.get('bandsId');
  }

   async ngOnInit() {   
    this.Bands = this.musicservice.getBands();

    this.item =  await this.musicservice.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });}

}
