import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiPage } from './ti.page';

const routes: Routes = [
  {
    path: '',
    component: TiPage
  },
  {
    path: 'tsu-ing-redes',
    loadChildren: () => import('./tsu-ing-redes/tsu-ing-redes.module').then( m => m.TsuIngRedesPageModule)
  },
  {
    path: 'tsu-ing-multiplataforma',
    loadChildren: () => import('./tsu-ing-multiplataforma/tsu-ing-multiplataforma.module').then( m => m.TsuIngMultiplataformaPageModule)
  },
  {
    path: 'tsu-ing-entorno',
    loadChildren: () => import('./tsu-ing-entorno/tsu-ing-entorno.module').then( m => m.TsuIngEntornoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiPageRoutingModule {}
