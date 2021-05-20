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
    path: 'music-search',
    loadChildren: () => import('./music/music-search/music-search.module').then( m => m.MusicSearchPageModule)
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
