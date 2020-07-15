import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuCapitalHumanoPageRoutingModule } from './tsu-capital-humano-routing.module';

import { TsuCapitalHumanoPage } from './tsu-capital-humano.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuCapitalHumanoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuCapitalHumanoPage]
})
export class TsuCapitalHumanoPageModule {}
