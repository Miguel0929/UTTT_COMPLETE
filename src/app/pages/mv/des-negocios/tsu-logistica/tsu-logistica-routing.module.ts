import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuLogisticaPage } from './tsu-logistica.page';

const routes: Routes = [
  {
    path: '',
    component: TsuLogisticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuLogisticaPageRoutingModule {}
