import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable , of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {  

  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  // Add a getHeroes method to return the mock heroes.
  getHeroes(): Observable<Hero[]> {
    const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes');
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // Add a getHero method to return a single hero with the specified id.
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
