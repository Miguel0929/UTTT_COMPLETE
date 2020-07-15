import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoPage } from './mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoPage
  },
  {
    path: 'tsu-ing-mant-maquinaria',
    loadChildren: () => import('./tsu-ing-mant-maquinaria/tsu-ing-mant-maquinaria.module').then( m => m.TsuIngMantMaquinariaPageModule)
  },
  {
    path: 'tsu-ing-mant-industrial',
    loadChildren: () => import('./tsu-ing-mant-industrial/tsu-ing-mant-industrial.module').then( m => m.TsuIngMantIndustrialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoPageRoutingModule {}
