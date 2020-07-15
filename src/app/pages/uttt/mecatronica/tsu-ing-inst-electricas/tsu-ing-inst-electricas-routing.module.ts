import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngInstElectricasPage } from './tsu-ing-inst-electricas.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngInstElectricasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngInstElectricasPageRoutingModule {}
