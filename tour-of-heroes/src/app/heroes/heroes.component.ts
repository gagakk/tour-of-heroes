import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes: Hero[] = []; // <-- heroes property
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  selectedHero?: Hero;

  // Add a getHeroes() method to fetch the heroes from the service.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x=> {
        console.log(x);
        this.heroes = x;
      });
  }

  // onselect() method assigns the clicked hero from the template to the component's selectedHero.
  onSelect(hero: Hero): void {
    this.messageService.add(`You selected ${hero.id} and ${hero.name}`);
    this.selectedHero = hero;
  }

  // Call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit() {
    this.getHeroes();
  }
}
