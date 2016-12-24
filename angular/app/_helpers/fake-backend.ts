import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        // array in local storage for registered players
        let players: any[] = JSON.parse(localStorage.getItem('players')) || [];

        // configure fake backend
        backend.connections.subscribe((connection: MockConnection) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    // get parameters from post request
                    let params = JSON.parse(connection.request.getBody());

                    // find if any player matches login credentials
                    let filteredPlayers = players.filter(player => {
                        return player.username === params.username && player.password === params.password;
                    });

                    if (filteredPlayers.length) {
                        // if login details are valid return 200 OK with player details and fake jwt token
                        let player = filteredPlayers[0];
                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: player.id,
                                username: player.username,
                                playerName: player.name,
                                token: 'fake-jwt-token'
                            }
                        })));
                    } else {
                        // else return 400 bad request
                        connection.mockError(new Error('Username or password is incorrect'));
                    }
                }

                // get players
                if (connection.request.url.endsWith('/api/players') && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return players if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: players })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

                // get user by id
                if (connection.request.url.match(/\/api\/players\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in players array
                        let urlParts = connection.request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedPlayers = players.filter(player => { return player.id === id; });
                        let player = matchedPlayers.length ? matchedPlayers[0] : null;

                        // respond 200 OK with player
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: player })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

                // create player
                if (connection.request.url.endsWith('/api/players') && connection.request.method === RequestMethod.Post) {
                    // get new player object from post body
                    let newPlayer = JSON.parse(connection.request.getBody());

                    // validation
                    let duplicatePlayer = players.filter(player => { return player.username === newPlayer.username; }).length;
                    if (duplicatePlayer) {
                        return connection.mockError(new Error('Username "' + newPlayer.username + '" is already taken'));
                    }

                    // save new user
                    newPlayer.id = players.length + 1;
                    players.push(newPlayer);
                    localStorage.setItem('players', JSON.stringify(players));

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }

                // delete user
                if (connection.request.url.match(/\/api\/players\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in players array
                        let urlParts = connection.request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < players.length; i++) {
                            let player = players[i];
                            if (player.id === id) {
                                // delete player
                                players.splice(i, 1);
                                localStorage.setItem('players', JSON.stringify(players));
                                break;
                            }
                        }

                        // respond 200 OK
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                    }
                }

            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};