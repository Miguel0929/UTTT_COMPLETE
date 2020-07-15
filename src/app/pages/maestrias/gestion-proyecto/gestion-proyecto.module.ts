import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProyectoPageRoutingModule } from './gestion-proyecto-routing.module';

import { GestionProyectoPage } from './gestion-proyecto.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProyectoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GestionProyectoPage]
})
export class GestionProyectoPageModule {}
