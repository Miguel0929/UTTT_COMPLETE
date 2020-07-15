import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaduriaPage } from './contaduria.page';

const routes: Routes = [
  {
    path: '',
    component: ContaduriaPage
  },
  {
    path: 'tsu-ing-contaduria',
    loadChildren: () => import('./tsu-ing-contaduria/tsu-ing-contaduria.module').then( m => m.TsuIngContaduriaPageModule)
  },
  {
    path: 'tsu-ing-capital-humano',
    loadChildren: () => import('./tsu-ing-capital-humano/tsu-ing-capital-humano.module').then( m => m.TsuIngCapitalHumanoPageModule)
  },
  {
    path: 'tsu-ing-negocio-proyecto',
    loadChildren: () => import('./tsu-ing-negocio-proyecto/tsu-ing-negocio-proyecto.module').then( m => m.TsuIngNegocioProyectoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaduriaPageRoutingModule {}
