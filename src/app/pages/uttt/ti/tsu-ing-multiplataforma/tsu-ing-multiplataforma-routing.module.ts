import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuIngMultiplataformaPage } from './tsu-ing-multiplataforma.page';

const routes: Routes = [
  {
    path: '',
    component: TsuIngMultiplataformaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuIngMultiplataformaPageRoutingModule {}
