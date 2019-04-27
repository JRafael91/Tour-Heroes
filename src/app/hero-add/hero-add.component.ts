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
    'SuperHuman', 'Magical Powers',
    'PSI-Shields', 'Mutant'];

  constructor(public heroService: HeroService) { }

  ngOnInit() {
  }

  add(heroForm: NgForm) {
    this.heroService.addHero(heroForm.value);
    heroForm.resetForm();
  }

}
