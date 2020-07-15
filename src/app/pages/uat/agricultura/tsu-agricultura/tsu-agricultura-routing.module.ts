import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuAgriculturaPage } from './tsu-agricultura.page';

const routes: Routes = [
  {
    path: '',
    component: TsuAgriculturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuAgriculturaPageRoutingModule {}
