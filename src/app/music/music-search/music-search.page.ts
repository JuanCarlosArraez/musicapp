

import { Component, OnInit , ViewChild} from '@angular/core';

import {  Router} from '@angular/router';
import { ModalController, IonSearchbar} from '@ionic/angular';
import {MusicService  } from '../../services/music.service';


@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.page.html',
  styleUrls: ['./music-search.page.scss'],
})
export class MusicSearchPage implements OnInit {


  @ViewChild('searchbar', {static: false}) searchbar:IonSearchbar;
  public resultList: any[];
  public loadedResultList: any[];

  constructor(
    public  musicservice: MusicService,
    private modalController: ModalController,
    public router: Router,
  ) { }


  async close(){
    await this.modalController.dismiss();
  }

  async openDetail(itemId){
    console.log("itemId"+itemId);
    // call loading //
    this.router.navigateByUrl('/music-detail/'+itemId);
    await this.modalController.dismiss();

  }

  async AddBand(){
    this.router.navigateByUrl('/music-add-band');
    await this.modalController.dismiss();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  ngOnInit() {
    console.log("--------------first time loaded-------------");
    this.musicservice.getBands().subscribe(results => {
      console.log(results);
      this.loadedResultList = results;
    });
   
    let timeoutID = setTimeout(() => {
     /*  this.searchbar.setFocus(); */
      console.log("setFocus()=======");
      clearTimeout(timeoutID);
    }, 200)


  }

  initializeItems(): void {
    console.log("call initialize")
    this.resultList = this.loadedResultList;
  }


  filterList(evt){
    console.log("call filter")
    this.initializeItems();
    const searchTerm = evt.srcElement.value;
    console.log("search value="+searchTerm);
    if(!searchTerm){
      console.log("return>>>>");
      this.resultList = [] ;
      return
    }
    this.resultList = this.resultList.filter(currentGoal => {
      if (currentGoal.name && searchTerm) {

        if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          console.log("Number of result value : true");
          return true;
        }
        console.log("Unmatch vlaue : false");
        return false;
      }
    });

  }


}
