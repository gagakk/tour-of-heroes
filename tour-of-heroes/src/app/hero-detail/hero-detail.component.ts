import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero | undefined;

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location ) { }

  ngOnInit(): void {
   this.getHero();
  }

  // Add a getHero() method to fetch the hero from the service.
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(x => this.hero = x);
  }

  // Save the hero after editing and go back to the previous page.
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => {this.goBack()});
    }
  }

  // Go back to the previous page.
  goBack(): void {
    this.location.back();
  }
}
