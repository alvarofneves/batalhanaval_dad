import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Game }       from '../_shared/index';
import { Observable } from 'rxjs/Rx';
import {BoardClass} from "./../gameBoard/boardClass";
import {BoatClass} from "../gameBoard/boatClass";
import {BOARDS} from "./../gameBoard/mock-boards";
import {BOATS} from "./../gameBoard/mock-boats";

@Injectable()
export class GameService {
    constructor(private http: Http) {    }

    newGame(game: Game): Observable<any> {
        console.log(game);
        return this.http.post('/api/games', game).map(r=> r.json());
    }

    updateGame(game: Game): Observable<any> {
        return this.http.put('/api/games', game).map(r=> r.json());
    }

    endGame(game: Game): Observable<any> {
        console.log('end game GameService');
        return this.http.put('/api/games', game).map(r=> r.json());
    }

    /*updateGame(game: Game): Observable<any> {
        console.log('obj. game com dados alterados p SRV: ');
        //console.log(game);
        return this.http.put('/api/games', game).map(r=> r.json());
    }*/

    getBoards(): BoardClass[] {
        return BOARDS;
    }

    addGame(board: BoardClass): void {
        BOARDS.push(board);
    }

    addBoatToBoard(boardID: number, boat: string): void {
        //BOARDS[boardID].addBoat(boat);
    }

    getBoats(): BoatClass[] {
        return BOATS;
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