import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const hero = this.httpClient.get<Hero>(`http://127.0.0.1:5000/detail/${id}`);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }

  // Add a updateHero method to update the hero on the server.
  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`http://127.0.0.1:5000/update`, hero);
  }
}
