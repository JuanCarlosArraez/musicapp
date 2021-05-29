import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicDetailEditPage } from './music-detail-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MusicDetailEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicDetailEditPageRoutingModule {}
