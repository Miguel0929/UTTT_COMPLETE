import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngEntornoPageRoutingModule } from './tsu-ing-entorno-routing.module';

import { TsuIngEntornoPage } from './tsu-ing-entorno.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngEntornoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngEntornoPage]
})
export class TsuIngEntornoPageModule {}
