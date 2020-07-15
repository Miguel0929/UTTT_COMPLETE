import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuFormulacionPageRoutingModule } from './tsu-formulacion-routing.module';

import { TsuFormulacionPage } from './tsu-formulacion.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuFormulacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuFormulacionPage]
})
export class TsuFormulacionPageModule {}
