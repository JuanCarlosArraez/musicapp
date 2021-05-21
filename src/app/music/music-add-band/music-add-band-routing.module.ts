import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicAddBandPage } from './music-add-band.page';

const routes: Routes = [
  {
    path: '',
    component: MusicAddBandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicAddBandPageRoutingModule {}
