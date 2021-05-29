import { Component,ViewChild,ElementRef, Input, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-playermusic',
  templateUrl: './playermusic.page.html',
  styleUrls: ['./playermusic.page.scss'],
})
export class PlayermusicPage implements OnInit {

  @ViewChild('audioElement', { static: false }) public _audioRef:  ElementRef;
  private audio: HTMLMediaElement;

  @Input() public autoplay: boolean = false;
  @Input() public volume: number = 1.0; /* 1.0 is loudest */

  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;

  itemId: any;
  

  constructor(
    public platform: Platform,
    private activatedRoute: ActivatedRoute,
    public  musicservice: MusicService,
  ) {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('playlistsId');

  }
    async ngOnInit() {
    this.item =  await this.musicservice.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });

  }

  

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public get paused(): boolean {
    if (this.audio) {
      return this.audio.paused;
    } else {
      return true;
    }
  }

  public play(): void {
    if (this.audio) {
      if (this.audio.readyState >= 2) {
        this.audio.play();
        /* this.aqui= this.audio.currentTime; */
        console.log( this._audioRef.nativeElement.currentTime)
       
      }
    }
  }


  public ngAfterViewInit() {
    this.audio = this._audioRef.nativeElement;
    if (this.audio) {
      this.audio.volume = this.volume;
      this.audio.autoplay = this.autoplay;
    }
  }





}
