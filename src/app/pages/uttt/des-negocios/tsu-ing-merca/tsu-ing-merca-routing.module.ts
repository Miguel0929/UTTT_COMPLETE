import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngMercaPage } from './tsu-ing-merca.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngMercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngMercaPageRoutingModule {}
