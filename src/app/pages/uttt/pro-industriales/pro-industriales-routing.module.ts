import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProIndustrialesPage } from './pro-industriales.page';

const routes: Routes = [
  {
    path: '',
    component: ProIndustrialesPage
  },
  {
    path: 'tsu-ing-ope-industriales',
    loadChildren: () => import('./tsu-ing-ope-industriales/tsu-ing-ope-industriales.module').then( m => m.TsuIngOpeIndustrialesPageModule)
  },
  {
    path: 'tsu-ing-mont-plantas',
    loadChildren: () => import('./tsu-ing-mont-plantas/tsu-ing-mont-plantas.module').then( m => m.TsuIngMontPlantasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProIndustrialesPageRoutingModule {}
