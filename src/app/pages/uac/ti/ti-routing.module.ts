import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiPage } from './ti.page';

const routes: Routes = [
  {
    path: '',
    component: TiPage
  },
  {
    path: 'tsu-ing-multiplataforma',
    loadChildren: () => import('./tsu-ing-multiplataforma/tsu-ing-multiplataforma.module').then( m => m.TsuIngMultiplataformaPageModule)
  },
  {
    path: 'tsu-ing-red',
    loadChildren: () => import('./tsu-ing-red/tsu-ing-red.module').then( m => m.TsuIngRedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiPageRoutingModule {}
