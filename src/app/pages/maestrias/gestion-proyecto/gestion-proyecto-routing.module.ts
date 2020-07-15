import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProyectoPage } from './gestion-proyecto.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProyectoPageRoutingModule {}
