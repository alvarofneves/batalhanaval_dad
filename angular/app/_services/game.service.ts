import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Game }       from '../_shared/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GameService {
    constructor(private http: Http) { }

    // receber playerCreator, beginDate
    //create(game: Game): Observable<any> {
    	//return this.http.post('/api/games', game, options).map(r=> r.json());
    //}


    getAll() {
    	//return this.http.get('/api/games', this.jwt()).map((response: Response) => response.json());
    }
}