import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuimicaPage } from './quimica.page';

const routes: Routes = [
  {
    path: '',
    component: QuimicaPage
  },
  {
    path: 'industrial',
    loadChildren: () => import('./industrial/industrial.module').then( m => m.IndustrialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuimicaPageRoutingModule {}
