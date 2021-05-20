import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { MusicService  } from '../services/music.service';
import { Router} from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  categories: Observable<any[]>;
  Popular: Observable<any[]>;


  slideOption = {
    slidesPerView: 'auto',
    grabCursor: true,
   /*  autoplay: true, */
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    public  musicservice: MusicService,
    public router: Router,) { }



  getCategory(){
    this.categories = this.musicservice.getPopular();
  }

  getPopularSong(){
    this.Popular = this.musicservice.getPopularSong();
  }
///////////////////////////////////////////////////////////////////

agg(number:number)
{
return  this.firestore.collection<any>('music_popularsong').add({
Available: "si",
Visible:  "si",
PriceEntero:number=5,
PriceExtra:number=5,
PriceMediaRacion:number=5,
PriceMedio:number=5,
PriceMedium:number=5,
PriceRacion:number=5,
PriceSmall:number=5,
attribute0_name: "Tamaño",
attribute3_name: "Tamaño",
attribute1_name: "Opciones",
attribute2_name: "Opciones",
attribute0_visible: false,
attribute1_visible: false,
attribute2_visible: false, //boolean
attribute3_visible: false,
description: "",
food_categoryId: "",
food_category_name: "",
image: "",
name:"",
price: number=5,
promotion: true,  //-------------------Food_promotion
Descuento: "-5$", //-------------------Food_promotion
rating: number=4,
recommended: false,
short_description: "",
stock:number=100,

attribute0_value:[ 
"Ración",
"1/2 Ración"],

attribute1_value:[ 
"Pequeño",
"Mediano",
"Grande"],

attribute2_value:
[
{"Price": number=5, 
 "isChecked": false,
 "name": "Milk"},

{"Price": number=5, 
"isChecked": false ,
"name": "Milk"}
],

attribute3_value:[ 
"Entero",
"Medio"]
});
}


///////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.getPopularSong();
    this.getCategory();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
