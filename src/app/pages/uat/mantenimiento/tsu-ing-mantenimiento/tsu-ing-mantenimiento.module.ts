import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngMantenimientoPageRoutingModule } from './tsu-ing-mantenimiento-routing.module';

import { TsuIngMantenimientoPage } from './tsu-ing-mantenimiento.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngMantenimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngMantenimientoPage]
})
export class TsuIngMantenimientoPageModule {}
