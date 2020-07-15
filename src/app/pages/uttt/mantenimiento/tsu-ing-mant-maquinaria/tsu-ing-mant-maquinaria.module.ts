import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngMantMaquinariaPageRoutingModule } from './tsu-ing-mant-maquinaria-routing.module';

import { TsuIngMantMaquinariaPage } from './tsu-ing-mant-maquinaria.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngMantMaquinariaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngMantMaquinariaPage]
})
export class TsuIngMantMaquinariaPageModule {}
