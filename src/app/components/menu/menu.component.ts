import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Universidad } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  universidades: Observable<Universidad[]>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.universidades = this.dataService.getMenu();
  }

}
