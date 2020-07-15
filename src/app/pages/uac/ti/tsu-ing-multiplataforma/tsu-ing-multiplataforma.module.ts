import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngMultiplataformaPageRoutingModule } from './tsu-ing-multiplataforma-routing.module';

import { TsuIngMultiplataformaPage } from './tsu-ing-multiplataforma.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngMultiplataformaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngMultiplataformaPage]
})
export class TsuIngMultiplataformaPageModule {}
