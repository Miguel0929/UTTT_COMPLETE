import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngRedesPageRoutingModule } from './tsu-ing-redes-routing.module';

import { TsuIngRedesPage } from './tsu-ing-redes.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngRedesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngRedesPage]
})
export class TsuIngRedesPageModule {}
