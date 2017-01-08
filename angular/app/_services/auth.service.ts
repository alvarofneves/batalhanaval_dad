import { Injectable }                              from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router }     from '@angular/router';

import { Player }     from '../_shared/index';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    public token: string;
    isLoggedIn: boolean = false;
    redirectUrl: string;        // store the URL so we can redirect after logging in


    constructor(private http : Http, private _router: Router) { }

    login(email, password) {
        console.log('AUTHENTICATION');
        let headers = new Headers();
        console.log(email);
        console.log(password);
        //let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/login', JSON.stringify({ email, password })).map((response: Response) => {
           r=> r.json()
       });
            //if (player && player.token) {
                // store player details and jwt token in local storage to keep player logged in between page refreshes
              //  localStorage.setItem('currentplayer', JSON.stringify(player));
            //}
            //this.isLoggedIn = true;
        //});
    }

    logout() {
        localStorage.removeItem('currentPlayer');
        this._router.navigate(['login']);
    }

    sendLoginGoogle() {
        return this.http.get('/auth/google');
    }

    // TODO função chamada em todos os pedidos que precisam de autenticação
    // ver txt 'callSome' na Dropbox
    // callSomeService() {   }
}