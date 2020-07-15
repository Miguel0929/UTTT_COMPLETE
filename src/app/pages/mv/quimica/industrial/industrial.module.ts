import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndustrialPageRoutingModule } from './industrial-routing.module';

import { IndustrialPage } from './industrial.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndustrialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IndustrialPage]
})
export class IndustrialPageModule {}
