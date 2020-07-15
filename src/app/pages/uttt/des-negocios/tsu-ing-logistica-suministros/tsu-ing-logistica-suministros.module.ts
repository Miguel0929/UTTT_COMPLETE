import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngLogisticaSuministrosPageRoutingModule } from './tsu-ing-logistica-suministros-routing.module';

import { TsuIngLogisticaSuministrosPage } from './tsu-ing-logistica-suministros.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngLogisticaSuministrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngLogisticaSuministrosPage]
})
export class TsuIngLogisticaSuministrosPageModule {}
