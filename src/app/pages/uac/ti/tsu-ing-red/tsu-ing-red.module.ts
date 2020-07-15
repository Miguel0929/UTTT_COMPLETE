import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngRedPageRoutingModule } from './tsu-ing-red-routing.module';

import { TsuIngRedPage } from './tsu-ing-red.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngRedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngRedPage]
})
export class TsuIngRedPageModule {}
