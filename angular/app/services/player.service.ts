import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Player } from '../shared/index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlayerService {
    constructor(private http: Http) { }

    // Envio dos dados do novo Player para o servidor
    create(player: Player): Observable<any>{
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });

        headers.append("Content-Type", 'application/json');
        
        //.map((response: Response) => response.json());      // post() : converte dados para JSON
        return this.http.post('/api/players', player, options).map(r=> r.json());
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
    private jwt() {
        // create authorization header with jwt token        
        let currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
        if (currentPlayer && currentPlayer.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentPlayer.token });
            return new RequestOptions({ headers: headers });
        }
    }
}