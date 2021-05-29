import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicAlbumDetailPageRoutingModule } from './music-album-detail-routing.module';

import { MusicAlbumDetailPage } from './music-album-detail.page';

import {BackShortComponent} from '../../components/global//back-short/back-short.component';
import {AlbumDetailComponent } from "../../components/headers/album-detail/album-detail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicAlbumDetailPageRoutingModule
  ],
  declarations: [MusicAlbumDetailPage, BackShortComponent, AlbumDetailComponent]
})
export class MusicAlbumDetailPageModule {}
