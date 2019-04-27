import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero = new Hero();

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
  }

  detail(hero: Hero) {
    this.router.navigate([`detail/${hero.$key}`]);
    this.heroService.selectedHero = hero;
  }
  delete(hero: Hero) {
    this.heroService.deleteHero(hero.$key);
  }
}
