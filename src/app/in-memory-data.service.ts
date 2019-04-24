import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', alterego: 'TBH', power: 'Really Smart' },
      { id: 12, name: 'Narco', alterego: 'TBH', power: 'Really Smart' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas', alterego: 'TBH', power: 'Really Smart' },
      { id: 15, name: 'Magneta', alterego: 'TBH', power: 'Really Smart' },
      { id: 16, name: 'Rubberman', alterego: 'TBH', power: 'Really Smart' },
      { id: 17, name: 'Dynama', alterego: 'TBH', power: 'Really Smart' },
      { id: 18, name: 'Dr IQ', alterego: 'TBH', power: 'Really Smart' },
      { id: 19, name: 'Magma', alterego: 'TBH', power: 'Really Smart' },
      { id: 20, name: 'Tornado', alterego: 'TBH', power: 'Really Smart' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  }
}
