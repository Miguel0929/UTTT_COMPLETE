import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngLogisticaPage } from './tsu-ing-logistica.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngLogisticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngLogisticaPageRoutingModule {}
