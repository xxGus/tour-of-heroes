///<reference path="shared/hero.ts"/>
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from './shared/hero.service';
import {Hero} from './shared/hero';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Address} from './shared/address';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

    public hero: Hero;
    heroForm: FormGroup;

    constructor(private heroService: HeroService,
                private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.heroForm = this.formBuilder.group({
            name: '',
            address: this.formBuilder.group({
                street: '',
                city: '',
                zip: ''
            }),
            power: '',
            sidekick: ''
        });
    }

    addHero(name: string): void {
        this.hero.name = name;
        console.log(this.hero);
        // this.heroService.addHero(this.hero);
    }
}

