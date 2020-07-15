import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngMercaPageRoutingModule } from './tsu-ing-merca-routing.module';

import { TsuIngMercaPage } from './tsu-ing-merca.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngMercaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngMercaPage]
})
export class TsuIngMercaPageModule {}
