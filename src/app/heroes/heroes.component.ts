import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  constructor(
    public heroSerivce: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSerivce.getHeroes().subscribe(heroes => this.heroSerivce.heroesList = heroes);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.heroSerivce.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroSerivce.heroesList.push(hero);
      });
  }

  delete(hero: Hero) {
    this.heroSerivce.heroesList = this.heroSerivce.heroesList.filter(h => h !== hero);
    this.heroSerivce.deleteHero(hero).subscribe();
  }
}
