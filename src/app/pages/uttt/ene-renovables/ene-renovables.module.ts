import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EneRenovablesPageRoutingModule } from './ene-renovables-routing.module';

import { EneRenovablesPage } from './ene-renovables.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EneRenovablesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EneRenovablesPage]
})
export class EneRenovablesPageModule {}
