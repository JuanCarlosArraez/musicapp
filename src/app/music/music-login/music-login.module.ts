import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicLoginPageRoutingModule } from './music-login-routing.module';

import { MusicLoginPage } from './music-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicLoginPageRoutingModule
  ],
  declarations: [MusicLoginPage]
})
export class MusicLoginPageModule {}
