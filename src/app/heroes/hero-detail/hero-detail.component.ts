// import {Component, OnInit, Input} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import {Location} from '@angular/common';
//
// import {Hero} from '../../models/hero';
// import {HeroService} from '../shared/hero.service';
// import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
//
//
// @Component({
//     selector: 'app-hero-detail',
//     templateUrl: './hero-detail.component.html',
//     styleUrls: ['./hero-detail.component.css']
// })
//
// export class HeroDetailComponent implements OnInit {
//     @Input() hero: Hero;
//
//     heroForm: FormGroup;
//     states = states;
//
//     constructor(private route: ActivatedRoute,
//                 private heroService: HeroService,
//                 private location: Location,
//                 private fb: FormBuilder) {
//
//         this.createForm();
//     }
//
//     ngOnInit(): void {
//         this.getHero();
//     }
//
//     createForm(): void {
//         this.heroForm = this.fb.group({
//             name: ['', Validators.required],
//             power: '',
//             sidekick: ''
//         });
//     }
//
//     getHero(): void {
//         const id = +this.route.snapshot.paramMap.get('id');
//         this.heroService.getHero(id)
//             .subscribe(hero => this.hero = hero);
//     }
//
//     goBack(): void {
//         this.location.back();
//     }
//
//     save(): void {
//         this.heroService.updateHero(this.hero)
//             .subscribe(() => this.goBack());
//     }
// }
