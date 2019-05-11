import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';

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
      this.heroes = item.map( e => ({
        $key: e.payload.key, ...e.payload.val() })
      ).slice(0, 3);
    });
  }

  detail(hero: Hero) {
    this.router.navigate([`detail/${hero.$key}`]);
    this.heroService.selectedHero = hero;
  }

}
