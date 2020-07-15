import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngAmbientalPage } from './tsu-ing-ambiental.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngAmbientalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngAmbientalPageRoutingModule {}
