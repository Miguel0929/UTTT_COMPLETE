import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtttPageRoutingModule } from './uttt-routing.module';

import { UtttPage } from './uttt.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtttPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UtttPage]
})
export class UtttPageModule {}
