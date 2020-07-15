import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiPage } from './ti.page';

const routes: Routes = [
  {
    path: '',
    component: TiPage
  },
  {
    path: 'tsu-ing-ti',
    loadChildren: () => import('./tsu-ing-ti/tsu-ing-ti.module').then( m => m.TsuIngTiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiPageRoutingModule {}
