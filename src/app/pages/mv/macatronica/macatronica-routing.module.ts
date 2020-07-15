import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacatronicaPage } from './macatronica.page';

const routes: Routes = [
  {
    path: '',
    component: MacatronicaPage
  },
  {
    path: 'tsu-ing-automatizacion',
    loadChildren: () => import('./tsu-ing-automatizacion/tsu-ing-automatizacion.module').then( m => m.TsuIngAutomatizacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacatronicaPageRoutingModule {}
