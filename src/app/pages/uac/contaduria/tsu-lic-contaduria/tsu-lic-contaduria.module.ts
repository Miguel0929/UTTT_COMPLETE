import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuLicContaduriaPageRoutingModule } from './tsu-lic-contaduria-routing.module';

import { TsuLicContaduriaPage } from './tsu-lic-contaduria.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuLicContaduriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuLicContaduriaPage]
})
export class TsuLicContaduriaPageModule {}
