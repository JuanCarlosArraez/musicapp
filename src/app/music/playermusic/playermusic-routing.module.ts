import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayermusicPage } from './playermusic.page';

const routes: Routes = [
  {
    path: '',
    component: PlayermusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayermusicPageRoutingModule {}
