import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicSearchPageRoutingModule } from './music-search-routing.module';

import { MusicSearchPage } from './music-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicSearchPageRoutingModule
  ],
  declarations: [MusicSearchPage]
})
export class MusicSearchPageModule {}
