import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuMercaPage } from './tsu-merca.page';

const routes: Routes = [
  {
    path: '',
    component: TsuMercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuMercaPageRoutingModule {}
