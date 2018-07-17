import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroListComponent} from './hero-list/hero-list.component';
// import {HeroSearchComponent} from './hero-search/hero-search.component';
// import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule

    ],
    declarations: [
        HeroesComponent,
        HeroListComponent,
        // HeroSearchComponent,
        // HeroDetailComponent
    ],
    exports: [
        HeroesComponent
    ]
})
export class HeroModule {
}
