import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoPage } from './mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoPage
  },
  {
    path: 'tsu-ing-mantenimiento',
    loadChildren: () => import('./tsu-ing-mantenimiento/tsu-ing-mantenimiento.module').then( m => m.TsuIngMantenimientoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoPageRoutingModule {}
