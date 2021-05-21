import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicLoginPage } from './music-login.page';

const routes: Routes = [
  {
    path: '',
    component: MusicLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicLoginPageRoutingModule {}
