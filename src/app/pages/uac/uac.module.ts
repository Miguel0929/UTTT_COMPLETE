import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UacPageRoutingModule } from './uac-routing.module';

import { UacPage } from './uac.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UacPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UacPage]
})
export class UacPageModule {}
