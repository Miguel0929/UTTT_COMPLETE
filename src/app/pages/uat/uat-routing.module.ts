import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UatPage } from './uat.page';

const routes: Routes = [
  {
    path: '',
    component: UatPage
  },
  {
    path: 'ti',
    loadChildren: () => import('./ti/ti.module').then( m => m.TiPageModule)
  },
  {
    path: 'des-negocios',
    loadChildren: () => import('./des-negocios/des-negocios.module').then( m => m.DesNegociosPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'agricultura',
    loadChildren: () => import('./agricultura/agricultura.module').then( m => m.AgriculturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UatPageRoutingModule {}
