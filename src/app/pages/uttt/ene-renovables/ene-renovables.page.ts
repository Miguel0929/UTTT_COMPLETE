import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-ene-renovables',
  templateUrl: './ene-renovables.page.html',
  styleUrls: ['./ene-renovables.page.scss'],
})
export class EneRenovablesPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. e ING. Energias Renovables',
      redirectTo: '/uttt/ene-renovables/tsu-ing-ener-renovables'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
