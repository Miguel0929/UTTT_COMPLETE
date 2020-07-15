import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-agricultura',
  templateUrl: './agricultura.page.html',
  styleUrls: ['./agricultura.page.scss'],
})
export class AgriculturaPage implements OnInit {

  carreras: Carrera[] = [
    {
      img: '/assets/shapes.svg',
      name: 'TSU. Agricultura',
      redirectTo: '/uat/agricultura/tsu-agricultura'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
