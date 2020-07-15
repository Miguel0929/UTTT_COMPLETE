import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngCapitalHumanoPage } from './tsu-ing-capital-humano.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngCapitalHumanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngCapitalHumanoPageRoutingModule {}
