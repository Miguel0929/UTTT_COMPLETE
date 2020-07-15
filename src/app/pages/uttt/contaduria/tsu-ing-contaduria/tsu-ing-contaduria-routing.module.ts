import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngContaduriaPage } from './tsu-ing-contaduria.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngContaduriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngContaduriaPageRoutingModule {}
