import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('AuthGuard#canActivate called');
        return true;
    }

    // not logged in so redirect to login page with the return url
    //this.router.navigate(['/login', { returnUrl: state.url }]);
    //return false;
}