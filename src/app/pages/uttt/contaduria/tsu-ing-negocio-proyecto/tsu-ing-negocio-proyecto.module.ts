import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngNegocioProyectoPageRoutingModule } from './tsu-ing-negocio-proyecto-routing.module';

import { TsuIngNegocioProyectoPage } from './tsu-ing-negocio-proyecto.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngNegocioProyectoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngNegocioProyectoPage]
})
export class TsuIngNegocioProyectoPageModule {}
