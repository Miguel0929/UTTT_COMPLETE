import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesNegociosPage } from './des-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: DesNegociosPage
  },
  {
    path: 'tsu-lic-des-negocios',
    loadChildren: () => import('./tsu-lic-des-negocios/tsu-lic-des-negocios.module').then( m => m.TsuLicDesNegociosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesNegociosPageRoutingModule {}
