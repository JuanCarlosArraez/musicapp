import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicSearchPage } from './music-search.page';

const routes: Routes = [
  {
    path: '',
    component: MusicSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicSearchPageRoutingModule {}
