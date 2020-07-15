import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngMontPlantasPage } from './tsu-ing-mont-plantas.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngMontPlantasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngMontPlantasPageRoutingModule {}
