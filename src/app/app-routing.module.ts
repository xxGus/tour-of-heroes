import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';
// import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {AppComponent} from './app.component';

const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    // {path: 'detail/:id', component: HeroDetailComponent},
    // {path: 'heroes', component: HeroesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
