import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.page.html',
  styleUrls: ['./mantenimiento.page.scss'],
})
export class MantenimientoPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Mantenimiento Maquinaria',
      redirectTo: '/uttt/mantenimiento/tsu-ing-mant-maquinaria'
    },
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Mantenimiento Industrial',
      redirectTo: '/uttt/mantenimiento/tsu-ing-mant-industrial'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
