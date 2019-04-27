import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().snapshotChanges().subscribe(item => {
      this.heroes = [];
      item.forEach(element => {
        const hero = element.payload.val();
        hero.$key = element.key;
        this.heroes.push(hero as Hero);
      })
    });
  }

  detail(hero: Hero) {
    this.router.navigate([`detail/${hero.$key}`]);
    this.heroService.selectedHero = hero;
  }

}
