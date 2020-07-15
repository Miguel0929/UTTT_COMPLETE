import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngAutomatizacionPage } from './tsu-ing-automatizacion.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngAutomatizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngAutomatizacionPageRoutingModule {}
