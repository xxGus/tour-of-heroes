import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';
import {HeroModule} from './heroes/hero.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase, 'heroes'),
        AngularFireDatabaseModule,
        HeroModule
    ],

    declarations: [
        AppComponent,
        MessagesComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
