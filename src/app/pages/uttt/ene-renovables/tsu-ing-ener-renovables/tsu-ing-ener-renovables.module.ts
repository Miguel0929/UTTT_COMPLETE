import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngEnerRenovablesPageRoutingModule } from './tsu-ing-ener-renovables-routing.module';

import { TsuIngEnerRenovablesPage } from './tsu-ing-ener-renovables.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngEnerRenovablesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngEnerRenovablesPage]
})
export class TsuIngEnerRenovablesPageModule {}
