import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngAmbientalPageRoutingModule } from './tsu-ing-ambiental-routing.module';

import { TsuIngAmbientalPage } from './tsu-ing-ambiental.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngAmbientalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngAmbientalPage]
})
export class TsuIngAmbientalPageModule {}
