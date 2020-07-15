import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngInstElectricasPageRoutingModule } from './tsu-ing-inst-electricas-routing.module';

import { TsuIngInstElectricasPage } from './tsu-ing-inst-electricas.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngInstElectricasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngInstElectricasPage]
})
export class TsuIngInstElectricasPageModule {}
