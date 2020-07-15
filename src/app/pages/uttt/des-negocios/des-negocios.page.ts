import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-des-negocios',
  templateUrl: './des-negocios.page.html',
  styleUrls: ['./des-negocios.page.scss'],
})
export class DesNegociosPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Logistica Transporte',
      redirectTo: '/uttt/des-negocios/tsu-ing-logistica'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Mercadotecnia',
      redirectTo: '/uttt/des-negocios/tsu-ing-merca'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Area de Negocios',
      redirectTo: '/uttt/contaduria/tsu-ing-ventas'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Logisticas Suministros',
      redirectTo: '/uttt/contaduria/tsu-ing-logistica-suministros'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

