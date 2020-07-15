import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngEnerRenovablesPage } from './tsu-ing-ener-renovables.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngEnerRenovablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngEnerRenovablesPageRoutingModule {}
