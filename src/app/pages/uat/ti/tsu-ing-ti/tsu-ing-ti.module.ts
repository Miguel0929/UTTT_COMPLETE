import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngTiPageRoutingModule } from './tsu-ing-ti-routing.module';

import { TsuIngTiPage } from './tsu-ing-ti.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngTiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngTiPage]
})
export class TsuIngTiPageModule {}
