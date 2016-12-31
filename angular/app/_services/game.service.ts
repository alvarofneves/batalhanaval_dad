import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Game }       from '../_shared/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GameService {
    constructor(private http: Http) { }

    newGame(game: Game): Observable<any> {
    	console.log('aqui');
    	console.log(game);
    	return this.http.post('/api/games', game).map(r=> r.json());
    }

    getGames(status: string) {
    	return this.http.get('/api/games').map((response: Response) => response.json());
    }

    //getGamesInProgress() {
    	//return this.http.get('/api/games'.map((response: Response) => response.json()));
    //}
}