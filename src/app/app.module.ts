import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* otros */
import { MusicSearchPageModule} from './music/music-search/music-search.module';

/* global */
import {HeaderComponent} from './components/global/header/header.component';
import {BackComponent} from './components/global/back/back.component';
import {BackShortComponent} from './components/global/back-short/back-short.component';

/* Inicio */
import {ButtonsStartComponent} from './components/inicio/buttons-start/buttons-start.component';
import { SectionOneComponent} from './components/inicio/section-one/section-one.component';
import { SectionTwoComponent} from './components/inicio/section-two/section-two.component';
import { SectionThreeComponent} from './components/inicio/section-three/section-three.component';

/* Rockbands */
import {BandRockComponent} from './components/bandsrock/band-rock/band-rock.component';

/* Album */
import { HeaderAlbumComponent } from "./components/album/header-album/header-album.component";
import { SectionUnoComponent } from "./components/album/section-uno/section-uno.component";
import { SectionDosComponent } from "./components/album/section-dos/section-dos.component";

/* Edit Detail */
import {EditBandComponent } from "./components/headers/edit-band/edit-band.component";
/* Plugins */
import { StatusBar } from '@ionic-native/status-bar/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    MusicSearchPageModule
  ],
  providers: [
    /* plugins */
    StatusBar,
    /* global */
    BackComponent,
    BackShortComponent,
    HeaderComponent,
    /* inicio */
    ButtonsStartComponent, 
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    /* Rock Band */
    BandRockComponent,
    /* Albums */
    HeaderAlbumComponent,
    SectionUnoComponent,
    SectionDosComponent,
    /* Detail Edit  */
    EditBandComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule {}
