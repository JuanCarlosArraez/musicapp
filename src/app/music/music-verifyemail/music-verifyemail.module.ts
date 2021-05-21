import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicVerifyemailPageRoutingModule } from './music-verifyemail-routing.module';

import { MusicVerifyemailPage } from './music-verifyemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicVerifyemailPageRoutingModule
  ],
  declarations: [MusicVerifyemailPage]
})
export class MusicVerifyemailPageModule {}
