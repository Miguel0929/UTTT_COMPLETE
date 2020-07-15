import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngCapitalHumanoPageRoutingModule } from './tsu-ing-capital-humano-routing.module';

import { TsuIngCapitalHumanoPage } from './tsu-ing-capital-humano.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngCapitalHumanoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngCapitalHumanoPage]
})
export class TsuIngCapitalHumanoPageModule {}
