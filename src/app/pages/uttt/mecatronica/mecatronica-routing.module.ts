import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecatronicaPage } from './mecatronica.page';

const routes: Routes = [
  {
    path: '',
    component: MecatronicaPage
  },
  {
    path: 'tsu-ing-inst-electricas',
    loadChildren: () => import('./tsu-ing-inst-electricas/tsu-ing-inst-electricas.module').then( m => m.TsuIngInstElectricasPageModule)
  },
  {
    path: 'tsu-ing-robotica',
    loadChildren: () => import('./tsu-ing-robotica/tsu-ing-robotica.module').then( m => m.TsuIngRoboticaPageModule)
  },
  {
    path: 'tsu-ing-automatizacion',
    loadChildren: () => import('./tsu-ing-automatizacion/tsu-ing-automatizacion.module').then( m => m.TsuIngAutomatizacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MecatronicaPageRoutingModule {}
