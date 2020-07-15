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
      img: '/assets/shapes.svg',
      name: 'TSU. e ING TI',
      redirectTo: '/uat/ti/tsu-ing-ti'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

