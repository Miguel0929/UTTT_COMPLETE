import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UatPageRoutingModule } from './uat-routing.module';

import { UatPage } from './uat.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UatPage]
})
export class UatPageModule {}
