import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaestriasPageRoutingModule } from './maestrias-routing.module';

import { MaestriasPage } from './maestrias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestriasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MaestriasPage]
})
export class MaestriasPageModule {}
