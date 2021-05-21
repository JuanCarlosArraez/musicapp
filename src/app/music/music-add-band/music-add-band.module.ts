import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicAddBandPageRoutingModule } from './music-add-band-routing.module';

import { MusicAddBandPage } from './music-add-band.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicAddBandPageRoutingModule
  ],
  declarations: [MusicAddBandPage]
})
export class MusicAddBandPageModule {}
