import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriculturaPage } from './agricultura.page';

const routes: Routes = [
  {
    path: '',
    component: AgriculturaPage
  },
  {
    path: 'tsu-agricultura',
    loadChildren: () => import('./tsu-agricultura/tsu-agricultura.module').then( m => m.TsuAgriculturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgriculturaPageRoutingModule {}
