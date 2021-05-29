import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicDetailEditPageRoutingModule } from './music-detail-edit-routing.module';

import { MusicDetailEditPage } from './music-detail-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicDetailEditPageRoutingModule
  ],
  declarations: [MusicDetailEditPage]
})
export class MusicDetailEditPageModule {}
