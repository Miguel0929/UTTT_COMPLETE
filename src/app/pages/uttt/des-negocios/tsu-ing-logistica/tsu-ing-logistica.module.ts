import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngLogisticaPageRoutingModule } from './tsu-ing-logistica-routing.module';

import { TsuIngLogisticaPage } from './tsu-ing-logistica.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngLogisticaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngLogisticaPage]
})
export class TsuIngLogisticaPageModule {}
