import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuLogisticaPageRoutingModule } from './tsu-logistica-routing.module';

import { TsuLogisticaPage } from './tsu-logistica.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuLogisticaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuLogisticaPage]
})
export class TsuLogisticaPageModule {}
