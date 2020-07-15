import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacatronicaPageRoutingModule } from './macatronica-routing.module';

import { MacatronicaPage } from './macatronica.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacatronicaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MacatronicaPage]
})
export class MacatronicaPageModule {}
