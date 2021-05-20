import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayermusicPageRoutingModule } from './playermusic-routing.module';

import { PlayermusicPage } from './playermusic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayermusicPageRoutingModule
  ],
  declarations: [PlayermusicPage]
})
export class PlayermusicPageModule {}
