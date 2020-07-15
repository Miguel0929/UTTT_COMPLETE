import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngOpeIndustrialesPageRoutingModule } from './tsu-ing-ope-industriales-routing.module';

import { TsuIngOpeIndustrialesPage } from './tsu-ing-ope-industriales.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngOpeIndustrialesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngOpeIndustrialesPage]
})
export class TsuIngOpeIndustrialesPageModule {}
