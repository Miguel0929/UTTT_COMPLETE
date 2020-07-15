import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuimicaPage } from './quimica.page';

const routes: Routes = [
  {
    path: '',
    component: QuimicaPage
  },
  {
    path: 'tsu-ing-industrial',
    loadChildren: () => import('./tsu-ing-industrial/tsu-ing-industrial.module').then( m => m.TsuIngIndustrialPageModule)
  },
  {
    path: 'tsu-ing-nanotecnologia',
    loadChildren: () => import('./tsu-ing-nanotecnologia/tsu-ing-nanotecnologia.module').then( m => m.TsuIngNanotecnologiaPageModule)
  },
  {
    path: 'tsu-ing-ambiental',
    loadChildren: () => import('./tsu-ing-ambiental/tsu-ing-ambiental.module').then( m => m.TsuIngAmbientalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimicaPageRoutingModule {}
