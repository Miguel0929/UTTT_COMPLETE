import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuFormulacionPage } from './tsu-formulacion.page';

const routes: Routes = [
  {
    path: '',
    component: TsuFormulacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuFormulacionPageRoutingModule {}
