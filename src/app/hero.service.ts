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
    return this.db.list('heroes').push({
      name: hero.name,
      alterego: hero.alterego,
      power: hero.power });
  }

  updateHero(hero: Hero, $key: string) {
    return this.db.list('heroes').update($key, {
      name: hero.name,
      alterego: hero.alterego,
      power: hero.power});
  }

  deleteHero($key: string) {
    this.db.list('heroes').remove($key)
    .then(_ => console.log('deleted success'))
    .catch(err => console.log(err, 'You do not have success'));
  }

}
