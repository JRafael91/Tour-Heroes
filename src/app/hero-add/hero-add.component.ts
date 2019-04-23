import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {
  @Output() addEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    this.addEvent.emit(name);
  }

}
