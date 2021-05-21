import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicRegisterPage } from './music-register.page';

const routes: Routes = [
  {
    path: '',
    component: MusicRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRegisterPageRoutingModule {}
