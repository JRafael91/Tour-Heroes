import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService) { }

  ngOnInit() {
  }

  delete(hero: Hero) {
    this.heroService.heroesList = this.heroService.heroesList.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
