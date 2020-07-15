import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MvPage } from './mv.page';

const routes: Routes = [
  {
    path: '',
    component: MvPage
  },
  {
    path: 'macatronica',
    loadChildren: () => import('./macatronica/macatronica.module').then( m => m.MacatronicaPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'des-negocios',
    loadChildren: () => import('./des-negocios/des-negocios.module').then( m => m.DesNegociosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvPageRoutingModule {}
