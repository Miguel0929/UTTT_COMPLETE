import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProIndustrialesPageRoutingModule } from './pro-industriales-routing.module';

import { ProIndustrialesPage } from './pro-industriales.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProIndustrialesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProIndustrialesPage]
})
export class ProIndustrialesPageModule {}
