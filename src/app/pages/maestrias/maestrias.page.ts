import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-maestrias',
  templateUrl: './maestrias.page.html',
  styleUrls: ['./maestrias.page.scss'],
})
export class MaestriasPage implements OnInit {

facultades: Facultad[] = [
    {
      icon: 'calculator-outline',
      name: 'Gestion de Proyectos',
      redirectTo: '/maestrias/gestion-proyecto'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
