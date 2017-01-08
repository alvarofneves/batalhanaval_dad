import { Injectable }                              from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Player }     from '../_shared/index';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    public token: string;
    isLoggedIn: boolean = false;
    redirectUrl: string;        // store the URL so we can redirect after logging in


    constructor(private http: Http) { }

    login(email, password) {
        let headers = new Headers();
        //let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/login', JSON.stringify({ email, password })).map((response: Response) => {
            let player = response.json();
            
            console.log('AUTHENTICATION');
            console.log(player);
            if (player && player.token) {
                // store player details and jwt token in local storage to keep player logged in between page refreshes
                localStorage.setItem('currentplayer', JSON.stringify(player));
            }
            this.isLoggedIn = true;
        });
    }

    logout() {
        localStorage.removeItem('currentPlayer');
        this.isLoggedIn = false;
    }

    sendLoginGoogle() {
        return this.http.get('/auth/google');
    }

    // TODO função chamada em todos os pedidos que precisam de autenticação
    // ver txt 'callSome' na Dropbox
    // callSomeService() {   }
}