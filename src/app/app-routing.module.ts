import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'playermusic/:playlistsId',
    loadChildren: () => import('./music/playermusic/playermusic.module').then( m => m.PlayermusicPageModule)
  },
  {
    path: 'music-list/:bandsId',
    loadChildren: () => import('./music/music-list/music-list.module').then( m => m.MusicListPageModule)
  },
  {
    path: 'music-detail/:detailId',
    loadChildren: () => import('./music/music-detail/music-detail.module').then( m => m.MusicDetailPageModule)
  },
  {
    path: 'music-album-detail/:albumId',
    loadChildren: () => import('./music/music-album-detail/music-album-detail.module').then( m => m.MusicAlbumDetailPageModule)
  },
  {
    path: 'music-search',
    loadChildren: () => import('./music/music-search/music-search.module').then( m => m.MusicSearchPageModule)
  },
  {
    path: 'music-login',
    loadChildren: () => import('./music/music-login/music-login.module').then( m => m.MusicLoginPageModule)
  },
  {
    path: 'music-register',
    loadChildren: () => import('./music/music-register/music-register.module').then( m => m.MusicRegisterPageModule)
  },
  {
    path: 'music-verifyemail',
    loadChildren: () => import('./music/music-verifyemail/music-verifyemail.module').then( m => m.MusicVerifyemailPageModule)
  },
  {
    path: 'music-forgot-password',
    loadChildren: () => import('./music/music-forgot-password/music-forgot-password.module').then( m => m.MusicForgotPasswordPageModule)
  },
  {
    path: 'music-add-band',
    loadChildren: () => import('./music/music-add-band/music-add-band.module').then( m => m.MusicAddBandPageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
