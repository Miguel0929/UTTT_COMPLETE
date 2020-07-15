import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-uttt',
  templateUrl: './uttt.page.html',
  styleUrls: ['./uttt.page.scss'],
})
export class UtttPage implements OnInit {

  facultades: Facultad[] = [
    {
      icon: 'leaf-outline',
      name: 'Energias Renovables',
      redirectTo: '/uttt/ene-renovables'
    },
    {
      icon: 'flask-outline',
      name: 'Quimica',
      redirectTo: '/uttt/quimica'
    },
    {
      icon: 'build-outline',
      name: 'Mantenimiento',
      redirectTo: '/uttt/mantenimiento'
    },
    {
      icon: 'calculator-outline',
      name: 'Contaduria',
      redirectTo: '/uttt/contaduria'
    },
    {
      icon: 'construct-outline',
      name: 'Procesos Industriales',
      redirectTo: '/uttt/pro-industriales'
    },
    {
      icon: 'bar-chart-outline',
      name: 'Desarrollo de Negocios',
      redirectTo: '/uttt/des-negocios'
    },
    {
      icon: 'rocket-outline',
      name: 'Mecatronica',
      redirectTo: '/uttt/mecatronica'
    },
    {
      icon: 'code-working-outline',
      name: 'Tecnologias de la Informacion',
      redirectTo: '/uttt/ti'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

