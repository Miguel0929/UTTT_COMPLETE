import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngNegocioProyectoPage } from './tsu-ing-negocio-proyecto.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngNegocioProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngNegocioProyectoPageRoutingModule {}
