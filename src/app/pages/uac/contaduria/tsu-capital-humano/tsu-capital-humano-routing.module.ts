import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuCapitalHumanoPage } from './tsu-capital-humano.page';

const routes: Routes = [
  {
    path: '',
    component: TsuCapitalHumanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuCapitalHumanoPageRoutingModule {}
