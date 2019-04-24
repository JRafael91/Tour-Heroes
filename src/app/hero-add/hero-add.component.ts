import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {
  powers = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  hero: Hero = new Hero();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  add(heroForm: NgForm) {
    this.heroService.addHero(heroForm.value)
    .subscribe(hero => {
      this.heroService.heroesList.push(hero);
    });
    heroForm.resetForm();
  }

}
