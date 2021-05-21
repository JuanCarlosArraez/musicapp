import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicRegisterPageRoutingModule } from './music-register-routing.module';

import { MusicRegisterPage } from './music-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicRegisterPageRoutingModule
  ],
  declarations: [MusicRegisterPage]
})
export class MusicRegisterPageModule {}
