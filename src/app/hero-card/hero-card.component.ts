import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;
  @Output() deleteEvent = new EventEmitter<Hero>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }
  delete(hero: Hero) {
    this.deleteEvent.emit(hero);
  }

}
