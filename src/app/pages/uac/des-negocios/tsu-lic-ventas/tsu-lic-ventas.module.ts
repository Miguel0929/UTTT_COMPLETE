import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuLicVentasPageRoutingModule } from './tsu-lic-ventas-routing.module';

import { TsuLicVentasPage } from './tsu-lic-ventas.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuLicVentasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuLicVentasPage]
})
export class TsuLicVentasPageModule {}
