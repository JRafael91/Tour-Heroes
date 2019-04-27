import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesList: AngularFireList<Hero>;
  selectedHero: Hero = new Hero();

  constructor(private db: AngularFireDatabase) { }

  getHeroes() {
    return this.heroesList = this.db.list('heroes');
  }

  addHero(hero: Hero) {
    this.db.list('heroes').push({
      name: hero.name,
      alterego: hero.alterego,
      power: hero.power })
    .then(_ => console.log('added success'))
    .catch(err => console.log(err, 'You do not have access'));
  }

  updateHero(hero: Hero, $key: string) {
    this.db.list('heroes').update($key, {
      name: hero.name,
      alterego: hero.alterego,
      power: hero.power})
    .then(_ => console.log('updated success'))
    .catch(err => console.log(err, 'You do not have success'));
  }

  deleteHero($key: string) {
    this.db.list('heroes').remove($key)
    .then(_ => console.log('deleted success'))
    .catch(err => console.log(err, 'You do not have success'));
  }

}
