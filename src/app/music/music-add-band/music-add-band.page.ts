import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ActionSheetController,LoadingController, } from '@ionic/angular';
import { Router} from '@angular/router';
import { MusicService  } from '../../services/music.service';
import { FirestorageService } from '../../services/firestorage.service';

@Component({
  selector: 'app-music-add-band',
  templateUrl: './music-add-band.page.html',
  styleUrls: ['./music-add-band.page.scss'],
})
export class MusicAddBandPage implements OnInit {

  
  @ViewChild('userInput') userInputViewChild: ElementRef;
  userInputElement: HTMLInputElement;
  @ViewChild('musicInput') musicInputViewChild: ElementRef;
  musicInputElement: HTMLInputElement;

  public bandForm: FormGroup;
  ItemSelect:any;
  MusicSelect:any;
  MusicName: any;
  recommended:any;
  newImage= '';
  newMusic = '';
  Image: any;
  name:any;

  constructor(
    public  musicservice: MusicService,
    public formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public router: Router,
    public firestorage: FirestorageService
  ) {
    this.bandForm = this.formBuilder.group({
      photo:['', Validators.required],
      music:['', Validators.required],
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

    const actionSheet1 = await this.actionSheetCtrl.create({
      header: 'Select Image',
      buttons: [{
        text: ' Select',
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
    await actionSheet1.present();
  };
  async loadImageActionSheet2(event) {

    const actionSheet2 = await this.actionSheetCtrl.create({
      header: 'Select Music',
      buttons: [{
        text: ' Select',
        icon: 'musical-notes-outline',
        handler: () => {
          this.musicInputElement.click();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet2.present();
  };


    loadImageFromDevice1(event: any) 
    {
    console.log(event.target.files)
    if(event.target.files && event.target.files[0])
    {
    this.ItemSelect=event.target.files[0];
    const reader = new FileReader();
    reader.onload =((image)=>{
    this.newImage = image.target.result as string;
    });
    reader.readAsDataURL(event.target.files[0]);
    }
    }
    
    loadImageFromDevice2(event: any) 
    {
    console.log(event.target.files)
    if(event.target.files && event.target.files[0])
    {
    this.MusicName =event.target.files[0].name;
    this.MusicSelect=event.target.files[0];
    const reader = new FileReader();
    reader.onload =((music)=>{
    this.newMusic = music.target.result as string;
    });
    reader.readAsDataURL(event.target.files[0]);
    }
    }
  
  getvalueChecked(event){
  this. recommended = event.target.value.isChecked
  console.log(event.target.value)
  console.log(event)
  }

    async addBand()
         {
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

         const path1 = 'imagesBands';
         const path2 = 'music';
         const name1 = this.bandForm.value.name;
         const name2 = this.MusicName;
         const res1  = await this.firestorage.uploadImage(this.ItemSelect, path1, name1);
         const res2  = await this.firestorage.uploadMusic(this.MusicSelect, path2, name2);
         console.log( 'respuesta' + res1)   

        //****** add review *******//
        await this.musicservice.addedBand(
        this.bandForm.value.photo = res1, 
        this.bandForm.value.music = res2,
        name1, 
        this.bandForm.value.rating,
        this.bandForm.value.description,
        this.bandForm.value.question,
        this.bandForm.value.short_description,
        )
        .then(  () => {
           // call loading 
           // close loading
           //Correct
          this.router.navigateByUrl('/folder/Inicio');
        }, 
        (error) => { 
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
  ngAfterViewInit() {
    this.userInputElement = this.userInputViewChild.nativeElement;
    this.musicInputElement = this.musicInputViewChild.nativeElement;
  };

}
