///<reference path="shared/hero.ts"/>
import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from './shared/hero.service';
import {Hero} from './shared/hero';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Address} from './shared/address';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit, OnChanges {

    public hero: Hero;
    heroForm: FormGroup;

    constructor(private heroService: HeroService,
                private formBuilder: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.rebuildForm();
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

    onSubmit(): void {
        // this.hero = this.prepareSaveHero();
        this.rebuildForm();
        // this.heroService.addHero(this.hero);
    }

    prepareSaveHero(): Hero {

        const formModel = this.heroForm.value;

        const saveHero = new Hero();

        saveHero.name = formModel.name;
        saveHero.address = formModel.address;
        saveHero.power = formModel.power;
        saveHero.sidekick = formModel.sidekick;

        return saveHero;
    }

    rebuildForm() {
        this.heroForm.reset({
            name: '',
            address: {
                street: '',
                city: '',
                zip: ''
            },
            power: '',
            sidekick: ''
        });
    }
}

