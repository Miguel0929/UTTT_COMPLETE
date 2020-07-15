import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngMantIndustrialPageRoutingModule } from './tsu-ing-mant-industrial-routing.module';

import { TsuIngMantIndustrialPage } from './tsu-ing-mant-industrial.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngMantIndustrialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngMantIndustrialPage]
})
export class TsuIngMantIndustrialPageModule {}
