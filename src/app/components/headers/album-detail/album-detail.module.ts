import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlbumDetailComponent } from "./album-detail.component";

@NgModule({
  declarations: [AlbumDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ], exports:[AlbumDetailComponent]
})
export class AlbumDetailModule { }
