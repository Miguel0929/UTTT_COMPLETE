import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngRedPage } from './tsu-ing-red.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngRedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngRedPageRoutingModule {}
