import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngMantIndustrialPage } from './tsu-ing-mant-industrial.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngMantIndustrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngMantIndustrialPageRoutingModule {}
