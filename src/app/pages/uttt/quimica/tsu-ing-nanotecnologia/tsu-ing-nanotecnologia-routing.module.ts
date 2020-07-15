import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngNanotecnologiaPage } from './tsu-ing-nanotecnologia.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngNanotecnologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngNanotecnologiaPageRoutingModule {}
