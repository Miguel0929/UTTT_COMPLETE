import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecatronicaPageRoutingModule } from './mecatronica-routing.module';

import { MecatronicaPage } from './mecatronica.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecatronicaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MecatronicaPage]
})
export class MecatronicaPageModule {}
