import {Component, OnInit} from '@angular/core';
import {Hero} from '../shared/hero';
import {HeroService} from '../shared/hero.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {

    public heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }
}
