import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
    this.heroService.getHeroes().snapshotChanges().subscribe(item => {
      this.heroes$ = [];
      item.forEach(element => {
        const hero = element.payload.val();
        hero.$key = element.key;
        this.heroes$.push(hero as Hero);
      });
    });
  }

  detail(hero: Hero) {
    this.router.navigate([`detail/${hero.$key}`]);
    this.heroService.selectedHero = hero;
  }

}
