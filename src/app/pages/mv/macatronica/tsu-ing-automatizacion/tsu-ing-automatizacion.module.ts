import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngAutomatizacionPageRoutingModule } from './tsu-ing-automatizacion-routing.module';

import { TsuIngAutomatizacionPage } from './tsu-ing-automatizacion.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngAutomatizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngAutomatizacionPage]
})
export class TsuIngAutomatizacionPageModule {}
