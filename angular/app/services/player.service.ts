import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Player } from '../shared/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlayerService {
    constructor(private http: Http) { }

    create(player: Player): Observable<any>{
        var headers = new Headers();
        var options = new RequestOptions({ headers: headers });

        headers.append("Content-Type", 'application/json');
        
        return this.http.post('/api/players', player, options).map(r=> r.json());
        //return this.http.post('http://localhost:7777//api/players', player, this.jwt()).map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get('/api/players', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/players/' + id, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/players/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods 

    //ainda nao está a ser utilizado
    
    private jwt() {
        // create authorization header with jwt token        
        let currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
        if (currentPlayer && currentPlayer.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentPlayer.token });
            return new RequestOptions({ headers: headers });
        }
    }
}