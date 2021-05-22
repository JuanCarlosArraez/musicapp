import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicAlbumDetailPageRoutingModule } from './music-album-detail-routing.module';

import { MusicAlbumDetailPage } from './music-album-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicAlbumDetailPageRoutingModule
  ],
  declarations: [MusicAlbumDetailPage]
})
export class MusicAlbumDetailPageModule {}
