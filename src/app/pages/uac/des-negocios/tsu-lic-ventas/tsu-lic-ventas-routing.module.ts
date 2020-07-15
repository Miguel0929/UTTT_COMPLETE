import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuLicVentasPage } from './tsu-lic-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: TsuLicVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuLicVentasPageRoutingModule {}
