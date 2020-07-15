import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngVentasPageRoutingModule } from './tsu-ing-ventas-routing.module';

import { TsuIngVentasPage } from './tsu-ing-ventas.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngVentasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngVentasPage]
})
export class TsuIngVentasPageModule {}
