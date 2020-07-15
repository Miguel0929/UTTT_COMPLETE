import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuLicDesNegociosPage } from './tsu-lic-des-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: TsuLicDesNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuLicDesNegociosPageRoutingModule {}
