import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MultiComponentService {

    // Observable string sources
    private boatPlacementSource = new Subject<boolean>();
    constructor(){
        this.boatPlacementSource.next(false);
    }

    // Observable string streams
    boatPlacement$ = this.boatPlacementSource.asObservable();

    // Service message commands
    boatPrepared(flag: boolean) {
        this.boatPlacementSource.next(flag);
    }
}