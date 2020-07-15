import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngIndustrialPageRoutingModule } from './tsu-ing-industrial-routing.module';

import { TsuIngIndustrialPage } from './tsu-ing-industrial.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngIndustrialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngIndustrialPage]
})
export class TsuIngIndustrialPageModule {}
