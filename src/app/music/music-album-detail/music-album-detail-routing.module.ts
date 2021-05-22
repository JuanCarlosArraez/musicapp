import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicAlbumDetailPage } from './music-album-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MusicAlbumDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicAlbumDetailPageRoutingModule {}
