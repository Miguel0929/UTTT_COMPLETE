import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngOpeIndustrialesPage } from './tsu-ing-ope-industriales.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngOpeIndustrialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngOpeIndustrialesPageRoutingModule {}
