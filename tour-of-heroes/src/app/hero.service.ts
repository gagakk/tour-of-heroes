import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Add a getHeroes method to return the mock heroes.
  getHeroes(): Hero[] {
    return HEROES;
  }
}
