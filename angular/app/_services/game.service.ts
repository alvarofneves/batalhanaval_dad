import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Game }     from '../_shared/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlayerService {
    constructor(private http: Http) { }

    //create(game: Game): Observable<any> {
    //}

    getAll() {

    }
}