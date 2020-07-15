import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuLicContaduriaPage } from './tsu-lic-contaduria.page';

const routes: Routes = [
  {
    path: '',
    component: TsuLicContaduriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuLicContaduriaPageRoutingModule {}
