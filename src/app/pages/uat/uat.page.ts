import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-uat',
  templateUrl: './uat.page.html',
  styleUrls: ['./uat.page.scss'],
})
export class UatPage implements OnInit {

  facultades: Facultad[] = [
    {
      icon: 'leaf-outline',
      name: 'Agricultura',
      redirectTo: '/uat/agricultura'
    },
    {
      icon: 'build-outline',
      name: 'Mantenimiento',
      redirectTo: '/uat/mantenimiento'
    },
    {
      icon: 'calculator-outline',
      name: 'Contaduria',
      redirectTo: '/uat/contaduria'
    },
    {
      icon: 'bar-chart-outline',
      name: 'Desarrollo de Negocios',
      redirectTo: '/uat/des-negocios'
    },
    {
      icon: 'code-working-outline',
      name: 'Tecnologias de la Informacion',
      redirectTo: '/uat/ti'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
