import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesNegociosPage } from './des-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesNegociosPage
  },
  {
    path: 'tsu-logistica',
    loadChildren: () => import('./tsu-logistica/tsu-logistica.module').then( m => m.TsuLogisticaPageModule)
  },
  {
    path: 'tsu-merca',
    loadChildren: () => import('./tsu-merca/tsu-merca.module').then( m => m.TsuMercaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesNegociosPageRoutingModule {}
