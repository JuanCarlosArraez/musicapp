import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicForgotPasswordPageRoutingModule } from './music-forgot-password-routing.module';

import { MusicForgotPasswordPage } from './music-forgot-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicForgotPasswordPageRoutingModule
  ],
  declarations: [MusicForgotPasswordPage]
})
export class MusicForgotPasswordPageModule {}
