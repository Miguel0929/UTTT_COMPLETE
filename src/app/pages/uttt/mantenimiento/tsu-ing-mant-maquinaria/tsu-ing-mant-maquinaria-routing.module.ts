import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngMantMaquinariaPage } from './tsu-ing-mant-maquinaria.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngMantMaquinariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngMantMaquinariaPageRoutingModule {}
