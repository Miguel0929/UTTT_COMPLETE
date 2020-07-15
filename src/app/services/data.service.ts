import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Universidad } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getMenu() {
    return this.http.get<Universidad[]>('assets/data/menu.json');
  }
}
