import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngRedesPage } from './tsu-ing-redes.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngRedesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngRedesPageRoutingModule {}
