import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngVentasPage } from './tsu-ing-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngVentasPageRoutingModule {}
