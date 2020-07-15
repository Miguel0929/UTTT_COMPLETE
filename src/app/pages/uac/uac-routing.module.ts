import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UacPage } from './uac.page';

const routes: Routes = [
  {
    path: '',
    component: UacPage
  },
  {
    path: 'agricultura',
    loadChildren: () => import('./agricultura/agricultura.module').then( m => m.AgriculturaPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'des-negocios',
    loadChildren: () => import('./des-negocios/des-negocios.module').then( m => m.DesNegociosPageModule)
  },
  {
    path: 'ti',
    loadChildren: () => import('./ti/ti.module').then( m => m.TiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UacPageRoutingModule {}
