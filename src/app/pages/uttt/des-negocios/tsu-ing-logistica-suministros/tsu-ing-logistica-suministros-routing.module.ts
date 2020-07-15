import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngLogisticaSuministrosPage } from './tsu-ing-logistica-suministros.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngLogisticaSuministrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngLogisticaSuministrosPageRoutingModule {}
