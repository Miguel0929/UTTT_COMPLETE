import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EneRenovablesPage } from './ene-renovables.page';

const routes: Routes = [
  {
    path: '',
    component: EneRenovablesPage
  },
  {
    path: 'tsu-ing-ener-renovables',
    loadChildren: () => import('./tsu-ing-ener-renovables/tsu-ing-ener-renovables.module').then( m => m.TsuIngEnerRenovablesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EneRenovablesPageRoutingModule {}
