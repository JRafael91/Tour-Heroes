import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = new Hero();

  constructor(
    public heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  getHero() {
    return console.warn('in process');
  }

  goBack() {
    this.heroService.selectedHero = new Hero();
    this.router.navigate(['heroes']);
  }

  save(heroForm: NgForm) {
    const $key = this.heroService.selectedHero.$key;
    this.heroService.updateHero(heroForm.value, $key)
    .then(_ => {
      console.log('updated success');
      this.goBack();
    })
    .catch(err => console.log(err, 'You do not have success'));
  }

}
