import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-ti',
  templateUrl: './ti.page.html',
  styleUrls: ['./ti.page.scss'],
})
export class TiPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/multiplataforma.jpg',
      name: 'TSU. Software Multiplataforma',
      redirectTo: '/uttt/ti/tsu-ing-multiplataforma'
    },
    {
      img: '/assets/entorno-digital.jpg',
      name: 'TSU. Entorno Virtual y Negocio Digital',
      redirectTo: '/uttt/ti/tsu-ing-entorno'
    },
    {
      img: '/assets/red-digital.jpg',
      name: 'TSU. Redes Digitales',
      redirectTo: '/uttt/ti/tsu-ing-redes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

