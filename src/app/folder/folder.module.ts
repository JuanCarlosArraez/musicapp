import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
/* global */
import {HeaderComponent} from '../components/global/header/header.component';
import {BackComponent} from '../components/global/back/back.component';
import {BackShortComponent} from '../components/global/back-short/back-short.component';

/* Inicio */
import {ButtonsStartComponent} from '../components/inicio/buttons-start/buttons-start.component';
import { SectionOneComponent} from '../components/inicio/section-one/section-one.component';
import { SectionTwoComponent} from '../components/inicio/section-two/section-two.component';
import { SectionThreeComponent} from '../components/inicio/section-three/section-three.component';

/* Rock Band */
import {BandRockComponent} from '../components/bandsrock/band-rock/band-rock.component';

/* Album */
import { SectionUnoComponent } from "../components/album/section-uno/section-uno.component";
import { SectionDosComponent } from "../components/album/section-dos/section-dos.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    
  ],
  declarations: [
    FolderPage,
    /* global */
    BackComponent,
    BackShortComponent,
    HeaderComponent,
    /* Inicio */
    ButtonsStartComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    /* Rock Band */
    BandRockComponent,
    /* Album */
    SectionUnoComponent,
    SectionDosComponent

  ]
})
export class FolderPageModule {}
