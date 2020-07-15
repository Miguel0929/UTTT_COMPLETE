import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriculturaPageRoutingModule } from './agricultura-routing.module';

import { AgriculturaPage } from './agricultura.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriculturaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgriculturaPage]
})
export class AgriculturaPageModule {}
