import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesNegociosPage } from './des-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesNegociosPage
  },
  {
    path: 'tsu-lic-merca',
    loadChildren: () => import('./tsu-lic-merca/tsu-lic-merca.module').then( m => m.TsuLicMercaPageModule)
  },
  {
    path: 'tsu-lic-ventas',
    loadChildren: () => import('./tsu-lic-ventas/tsu-lic-ventas.module').then( m => m.TsuLicVentasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesNegociosPageRoutingModule {}
