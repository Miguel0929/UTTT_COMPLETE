import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuLicMercaPage } from './tsu-lic-merca.page';

const routes: Routes = [
  {
    path: '',
    component: TsuLicMercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuLicMercaPageRoutingModule {}
