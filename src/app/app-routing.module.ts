import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { NoLoginGuard } from "./shared/no-login.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'music-login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'playermusic/:playlistsId',
    loadChildren: () => import('./music/playermusic/playermusic.module').then( m => m.PlayermusicPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'music-list/:bandsId',
    loadChildren: () => import('./music/music-list/music-list.module').then( m => m.MusicListPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'music-detail/:detailId',
    loadChildren: () => import('./music/music-detail/music-detail.module').then( m => m.MusicDetailPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'music-album-detail/:albumId',
    loadChildren: () => import('./music/music-album-detail/music-album-detail.module').then( m => m.MusicAlbumDetailPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'music-search',
    loadChildren: () => import('./music/music-search/music-search.module').then( m => m.MusicSearchPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'music-add-band',
    loadChildren: () => import('./music/music-add-band/music-add-band.module').then( m => m.MusicAddBandPageModule),
    canActivate: [AuthGuard],/* si el usuario NO esta logado, dirigirlo hasta LOGIN "music-login.html" */
  },
  {
    path: 'music-login',
    loadChildren: () => import('./music/music-login/music-login.module').then( m => m.MusicLoginPageModule),
    canActivate: [NoLoginGuard]/* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */ 
  },
  {
    path: 'music-register',
    loadChildren: () => import('./music/music-register/music-register.module').then( m => m.MusicRegisterPageModule),
    canActivate: [NoLoginGuard]/* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */ 
  },
  {
    path: 'music-verifyemail',
    loadChildren: () => import('./music/music-verifyemail/music-verifyemail.module').then( m => m.MusicVerifyemailPageModule),
    canActivate: [NoLoginGuard]/* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */ 
  },
  {
    path: 'music-forgot-password',
    loadChildren: () => import('./music/music-forgot-password/music-forgot-password.module').then( m => m.MusicForgotPasswordPageModule),
    canActivate: [NoLoginGuard]/* si el usuario esta logado, dirigirlo hasta donde vaya a pedir "folder/inicio.html" */ 
  },  {
    path: 'music-detail-edit',
    loadChildren: () => import('./music/music-detail-edit/music-detail-edit.module').then( m => m.MusicDetailEditPageModule)
  },


 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
