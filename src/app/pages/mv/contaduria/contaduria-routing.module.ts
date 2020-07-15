import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaduriaPage } from './contaduria.page';

const routes: Routes = [
  {
    path: '',
    component: ContaduriaPage
  },
  {
    path: 'tsu-lic-contaduria',
    loadChildren: () => import('./tsu-lic-contaduria/tsu-lic-contaduria.module').then( m => m.TsuLicContaduriaPageModule)
  },
  {
    path: 'tsu-formulacion',
    loadChildren: () => import('./tsu-formulacion/tsu-formulacion.module').then( m => m.TsuFormulacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaduriaPageRoutingModule {}
