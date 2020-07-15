import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtttPage } from './uttt.page';

const routes: Routes = [
  {
    path: '',
    component: UtttPage
  },
  {
    path: 'ti',
    loadChildren: () => import('./ti/ti.module').then( m => m.TiPageModule)
  },
  {
    path: 'ene-renovables',
    loadChildren: () => import('./ene-renovables/ene-renovables.module').then( m => m.EneRenovablesPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'pro-industriales',
    loadChildren: () => import('./pro-industriales/pro-industriales.module').then( m => m.ProIndustrialesPageModule)
  },
  {
    path: 'des-negocios',
    loadChildren: () => import('./des-negocios/des-negocios.module').then( m => m.DesNegociosPageModule)
  },
  {
    path: 'mecatronica',
    loadChildren: () => import('./mecatronica/mecatronica.module').then( m => m.MecatronicaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtttPageRoutingModule {}
