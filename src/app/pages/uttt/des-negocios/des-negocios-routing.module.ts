import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesNegociosPage } from './des-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesNegociosPage
  },
  {
    path: 'tsu-ing-logistica',
    loadChildren: () => import('./tsu-ing-logistica/tsu-ing-logistica.module').then( m => m.TsuIngLogisticaPageModule)
  },
  {
    path: 'tsu-ing-merca',
    loadChildren: () => import('./tsu-ing-merca/tsu-ing-merca.module').then( m => m.TsuIngMercaPageModule)
  },
  {
    path: 'tsu-ing-ventas',
    loadChildren: () => import('./tsu-ing-ventas/tsu-ing-ventas.module').then( m => m.TsuIngVentasPageModule)
  },
  {
    path: 'tsu-ing-logistica-suministros',
    loadChildren: () => import('./tsu-ing-logistica-suministros/tsu-ing-logistica-suministros.module').then( m => m.TsuIngLogisticaSuministrosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesNegociosPageRoutingModule {}
