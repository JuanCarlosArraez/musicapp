import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicDetailEditPageRoutingModule } from './music-detail-edit-routing.module';

import { MusicDetailEditPage } from './music-detail-edit.page';

import {BackComponent} from '../../components/global/back/back.component';
import {EditBandComponent } from "../../components/headers/edit-band/edit-band.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MusicDetailEditPageRoutingModule
  ],
  declarations: [MusicDetailEditPage,BackComponent, EditBandComponent]
})
export class MusicDetailEditPageModule {}
