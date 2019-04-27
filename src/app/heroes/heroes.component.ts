import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroesList: Hero[];

  constructor(
    public heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().snapshotChanges().subscribe(item => {
      this.heroesList = [];
      item.forEach(element => {
        const hero = element.payload.val();
        hero.$key = element.key;
        this.heroesList.push(hero as Hero);
      });
    });
  }
}
