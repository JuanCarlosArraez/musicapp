import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicVerifyemailPage } from './music-verifyemail.page';

const routes: Routes = [
  {
    path: '',
    component: MusicVerifyemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicVerifyemailPageRoutingModule {}
