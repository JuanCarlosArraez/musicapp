import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ActionSheetController,LoadingController, } from '@ionic/angular';
import { Router} from '@angular/router';
import { MusicService  } from '../../services/music.service';

@Component({
  selector: 'app-music-add-band',
  templateUrl: './music-add-band.page.html',
  styleUrls: ['./music-add-band.page.scss'],
})
export class MusicAddBandPage implements OnInit {

  
  @ViewChild('userInput') userInputViewChild: ElementRef;
  userInputElement: HTMLInputElement;


  public bandForm: FormGroup;
  ItemSelect:any;
  itemArray: any=[];

  constructor(
    public  musicservice: MusicService,
    public formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public router: Router,
  ) {
    this.bandForm = this.formBuilder.group({
      photo:['', Validators.required],
      name: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(6)]],
      question: ['', Validators.required],
      short_description: ['', Validators.required]
  }); 
  
   }

   public form = [
    { val: 'Sí', isChecked: true },
    { val: 'No', isChecked: false },
  ];


  async loadImageActionSheet1(event) {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Select',
        icon: 'images-outline',
        handler: () => {
          this.userInputElement.click();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });

    await actionSheet.present();

  };

  loadImageFromDevice1(event) {
    this.ItemSelect=event.target.files[0].name
    console.log(event.target.files)
  };

  ngAfterViewInit() {
    this.userInputElement = this.userInputViewChild.nativeElement;
  };
    // select visible
  /*     getValue() {
      console.log("call getValue()");
      this.ItemSelect =  this.itemArray.attribute2_value.filter(value => {
        return value.isChecked;
      });
      console.log(this.ItemSelect);
      this.ItemSelect =  this.itemArray.attribute2_value.filter(value => {
        return value.isChecked;
      });
      
      console.log("this addOn="+this.ItemSelect)
    }
 */

    async addBand(){
       console.log("_____call addBand");
       if (!this.bandForm.valid){
         console.log(this.bandForm.value);
         console.log("____bandForm invalid ") 
         //this.presentAlert("invalid form");
       } else {
         //****** loading *******//
         const loading = await this.loadingController.create({
           duration: 2000,
           message: '',
           translucent: true,
           cssClass: 'custom-loading'
         });
         //return await loading.present();
         await loading.present();

      //****** add review *******//
      await this.musicservice.addAddress(
        this.bandForm.value.photo, 
        this.bandForm.value.name, 
        this.bandForm.value.rating,
        this.bandForm.value.description,
        this.bandForm.value.question,
        this.bandForm.value.short_description,
        
      )
      .then(  () => {
           // call loading 
           // close loading
          this.router.navigateByUrl('/folder/Inicio');
     
      }, (error) => { 
         var errorMessage: string = error.message;
         console.log("ERROR:"+errorMessage);
          //loadingPopup.dismiss();
          //this.presentAlert(errorMessage);      
      });
    }
  }

  close(){
    this.router.navigateByUrl('/folder/Inicio');
  }

  ngOnInit() {
  }

}
