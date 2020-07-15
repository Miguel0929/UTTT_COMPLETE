import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngMontPlantasPageRoutingModule } from './tsu-ing-mont-plantas-routing.module';

import { TsuIngMontPlantasPage } from './tsu-ing-mont-plantas.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngMontPlantasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngMontPlantasPage]
})
export class TsuIngMontPlantasPageModule {}
