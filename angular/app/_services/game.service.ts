import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Game }       from '../_shared/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GameService {
    constructor(private http: Http) { }

    newGame(game: Game): Observable<any> {
    	console.log(game);
    	return this.http.post('/api/games', game).map(r=> r.json());
    }

    getAllGames(): Observable<any> {   
        return this.http.get('/api/games').map((response: Response) => response.json());
    }

    getGamesByStatus(status: String) {   
        return this.http.get('/api/gamesSearch/' + status).map((response: Response) => response.json());
    }

    getGamesByCreator(idPlayer: Number) {   
        return this.http.get('/api/games').map((response: Response) => response.json());
    }
}