import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaestriasPage } from './maestrias.page';

const routes: Routes = [
  {
    path: '',
    component: MaestriasPage
  },
  {
    path: 'gestion-proyecto',
    loadChildren: () => import('./gestion-proyecto/gestion-proyecto.module').then( m => m.GestionProyectoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaestriasPageRoutingModule {}
