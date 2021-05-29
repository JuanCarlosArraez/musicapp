import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicDetailPageRoutingModule } from './music-detail-routing.module';

import { MusicDetailPage } from './music-detail.page';

import {BackShortComponent} from '../../components/global//back-short/back-short.component';
import {BandDetailComponent } from "../../components/headers/band-detail/band-detail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicDetailPageRoutingModule
  ],
  declarations: [MusicDetailPage, BackShortComponent, BandDetailComponent]
})
export class MusicDetailPageModule {}
