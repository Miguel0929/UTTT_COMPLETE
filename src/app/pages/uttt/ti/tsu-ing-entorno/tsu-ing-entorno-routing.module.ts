import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngEntornoPage } from './tsu-ing-entorno.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngEntornoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngEntornoPageRoutingModule {}
