import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngTiPage } from './tsu-ing-ti.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngTiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngTiPageRoutingModule {}
