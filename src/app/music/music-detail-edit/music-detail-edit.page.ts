import { Component, OnInit,ViewChild,ElementRef, } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { MusicService  } from '../../services/music.service';

import { IonicComponentService} from '../../services/ionic-component.service';
import { ActionSheetController } from '@ionic/angular';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
  selector: 'app-music-detail-edit',
  templateUrl: './music-detail-edit.page.html',
  styleUrls: ['./music-detail-edit.page.scss'],
})
export class MusicDetailEditPage implements OnInit {

  @ViewChild('userInput') userInputViewChild: ElementRef;
  userInputElement: HTMLInputElement;
  @ViewChild('musicInput') musicInputViewChild: ElementRef;
  musicInputElement: HTMLInputElement;

  public bandId: string;
  public BandForm: FormGroup;
  redirect:any;
  ItemSelect:any;
  MusicSelect:any;
  MusicName: any;
  recommended:boolean;
  newImage= '';
  newMusic = '';
  Image: any;
  name:any;
  

  item: Observable<any>;
  itemArray: any=[];
  itemSubscribe: any;
  itemId: any;

  constructor(    
    public  musicservice: MusicService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder,
    private ionicComponentService: IonicComponentService,
    private actionSheetCtrl: ActionSheetController,
    public firestorage: FirestorageService
    )
    { 
    this.itemId = this.activatedRoute.snapshot.paramMap.get('editId');

    this.BandForm = this.formBuilder.group({
      image:['', Validators.required],
      music:['', Validators.required],
      name: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(6)]],
      question: ['', Validators.required],
      short_description: ['', Validators.required]
  });
    }

    async ngOnInit() {
    
      this.musicservice.getItemDetail(this.itemId).subscribe(res => {
        console.log("----->actionArray="+res);
  
        this.BandForm.get('image').setValue( res.image);
        this.BandForm.get('music').setValue( res.music);
        this.BandForm.get('name').setValue( res.name);
        this.BandForm.get('rating').setValue( res.rating);
        this.BandForm.get('description').setValue( res.description);
        this.BandForm.get('question').setValue( res.recommended);
        this.BandForm.get('short_description').setValue( res.short_description);
      });  
  

    this.item =  await this.musicservice.getItemDetail( this.itemId);
    this.itemSubscribe = this.item.subscribe(res => {
    this.itemArray = res;
    });
  }


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

photook:any;
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
    this.photook= reader.readAsDataURL(event.target.files[0]);
    /* this.BandForm.get('image').setValue(this.photook);  */
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
  }



  async close(){
    this.redirect=this.router.navigateByUrl('/folder/Inicio');
    await this.redirect;
    }

    
  async editBand(){
    
        this.ionicComponentService.presentLoading();
         const path1 = 'imagesBands';
         const path2 = 'music';
         const name1 = this.BandForm.value.name;
         const name2 = this.MusicName;
         const res1  = await this.firestorage.uploadImage(this.ItemSelect, path1, name1);
         const res2  = await this.firestorage.uploadMusic(this.MusicSelect, path2, name2);
          await this.musicservice.edit(
          this.itemId,
          this.BandForm.value.photo = res1, 
          this.BandForm.value.music = res2,
          name1, 
          this.BandForm.value.rating,
          this.BandForm.value.description,
          this.BandForm.value.question,
          this.BandForm.value.short_description,
        )
       .then(  () => {
           this.ionicComponentService.dismissLoading();
           this.close();
       }, (error) => { 
          var errorMessage: string = error.message;
          console.log("ERROR:"+errorMessage);

          this.ionicComponentService.dismissLoading();   
          this.ionicComponentService.presentToast(errorMessage,4000);  
          this.close();
       });
   
     }

     ngAfterViewInit() {
      this.userInputElement = this.userInputViewChild.nativeElement;
      this.musicInputElement = this.musicInputViewChild.nativeElement;
    };
}
