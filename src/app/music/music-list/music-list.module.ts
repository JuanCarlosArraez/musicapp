import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicListPageRoutingModule } from './music-list-routing.module';

import { MusicListPage } from './music-list.page';

/* global */
import {BackComponent} from '../../components/global/back/back.component';

/* Inicio */
import {ButtonsStartComponent} from '../../components/inicio/buttons-start/buttons-start.component';

/* Album */
import { HeaderAlbumComponent } from "../../components/album/header-album/header-album.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicListPageRoutingModule
  ],
  declarations: [MusicListPage, BackComponent, ButtonsStartComponent, HeaderAlbumComponent]
})
export class MusicListPageModule {}
