import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Hero} from './hero';
import {MessageService} from '../../messages/shared/message.service';

import {map} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {reject} from 'q';

@Injectable({providedIn: 'root'})

export class HeroService {
    private heroesUrl = '/heroes';
    private heroesRef: AngularFireList<Hero>;
    private heroRef: AngularFireObject<Hero>;
    private heroes: Observable<Hero[]>;
    private hero: Observable<Hero>;

    constructor(private db: AngularFireDatabase,
                private messageService: MessageService) {
    }

    getHeroes(): Observable<Hero[]> {
        this.heroesRef = this.db.list(this.heroesUrl);
        this.heroes = this.heroesRef.snapshotChanges().pipe(
            map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
        );
        return this.heroes;
    }

    /** GET hero by id. Will 404 if id not found */
    // getHero(id: number): Observable<Hero> {
    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.get<Hero>(url).pipe(
    //     tap(_ => this.log(`fetched hero id=${id}`)),
    //     catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
    // }

    /** Log a HeroService message with the MessageService */
    // private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
    // }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //
            // TODO: send the error to remote logging infrastructure
    //         console.error(error); // log to console instead
    //
            // TODO: better job of transforming error for user consumption
    //         this.log(`${operation} failed: ${error.message}`);
    //
    //         // Let the app keep running by returning an empty result.
    //         return of(result as T);
    //     };
    // }

    /** PUT: update the hero on the server */
    // updateHero(hero: Hero): Observable<any> {
    // return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    //     tap(_ => this.log(`updated hero id=${hero.id}`)),
    //     catchError(this.handleError<any>('updateHero'))
    // );
    // }

    /** POST: add a new hero to the server */
    addHero(hero: Hero): void {
        this.heroesRef.push(hero).then(resolve => console.log(resolve));
    }

    /** DELETE: delete the hero from the server */
    // deleteHero(hero: Hero | number): Observable<Hero> {
    // const id = typeof hero === 'number' ? hero : hero.id;
    // const url = `${this.heroesUrl}/${id}`;
    //
    // return this.http.delete<Hero>(url, httpOptions).pipe(
    //     tap(_ => this.log(`deleted hero id=${id}`)),
    //     catchError(this.handleError<Hero>('deleteHero'))
    // );
    // }

    /* GET heroes whose name contains search term */
    // searchHeroes(term: string): Observable<Hero[]> {
    // if (!term.trim()) {
    //     // if not search term, return empty hero array.
    //     return of([]);
    // }
    // return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    //     tap(_ => this.log(`found heroes matching "${term}"`)),
    //     catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
    // }
}
