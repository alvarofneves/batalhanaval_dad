import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Player } from '../shared/index';

@Injectable()
export class PlayerService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/players', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/players/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(player: Player) :Observable<any>{
        return this.http.post('http://localhost:7777//api/players', player, this.jwt()).map((response: Response) => response.json());
    }

    //update(player: Player) {
      //  return this.http.put('/api/players/' + player.id, player, this.jwt()).map((response: Response) => response.json());
    //}

    delete(id: number) {
        return this.http.delete('/api/players/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
        if (currentPlayer && currentPlayer.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentPlayer.token });
            return new RequestOptions({ headers: headers });
        }
    }
}