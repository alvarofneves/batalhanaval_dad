import { Injectable }                              from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Player }     from '../_shared/index';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;        // store the URL so we can redirect after logging in

    constructor(private http: Http) { }

    login(player: Player) {
        //console.log(email);
        //console.log(password);
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/login', player, options).map((response: Response) => {
            //return this.http.post('/api/login', JSON.stringify({ email: email, password: password })).map((response: Response) => {

            // login successful if there's a jwt token in the response
            let player = response.json();
            console.log('AUTHENTICATION');
            console.log(player);
            
            if (player && player.token) {
                // store player details and jwt token in local storage to keep player logged in between page refreshes
                localStorage.setItem('currentplayer', JSON.stringify(player));
            }
        });
    }

    logout() {
        // remove player from local storage to log player out
        localStorage.removeItem('currentPlayer');
        this.isLoggedIn = false;
    }
}