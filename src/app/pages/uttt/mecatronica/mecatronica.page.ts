import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mecatronica',
  templateUrl: './mecatronica.page.html',
  styleUrls: ['./mecatronica.page.scss'],
})
export class MecatronicaPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Instalaciones Electricas',
      redirectTo: '/uttt/mecatronica/tsu-ing-inst-electricas'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Robotica',
      redirectTo: '/uttt/mecatronica/tsu-ing-robotica'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Automatizacion',
      redirectTo: '/uttt/mecatronica/tsu-ing-automatizacion'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

