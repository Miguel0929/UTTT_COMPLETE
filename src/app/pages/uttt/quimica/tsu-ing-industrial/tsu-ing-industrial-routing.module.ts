import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngIndustrialPage } from './tsu-ing-industrial.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngIndustrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngIndustrialPageRoutingModule {}
