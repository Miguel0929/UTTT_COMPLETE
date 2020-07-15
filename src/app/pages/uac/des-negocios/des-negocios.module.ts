import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesNegociosPageRoutingModule } from './des-negocios-routing.module';

import { DesNegociosPage } from './des-negocios.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesNegociosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DesNegociosPage]
})
export class DesNegociosPageModule {}
