import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-contaduria',
  templateUrl: './contaduria.page.html',
  styleUrls: ['./contaduria.page.scss'],
})
export class ContaduriaPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Contaduria',
      redirectTo: '/uttt/contaduria/tsu-ing-contaduria'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Capital Humano',
      redirectTo: '/uttt/contaduria/tsu-ing-capital-humano'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Negocios y Proyectos',
      redirectTo: '/uttt/contaduria/tsu-ing-negocio-proyecto'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
