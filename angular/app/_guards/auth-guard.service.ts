import { Injectable } 			from '@angular/core';
import { CanActivate, Router }  from '@angular/router';

import { AuthService } 			from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        console.log('AuthGuard#canActivate called');
        return true;
    }

    checkLogin(url: string): boolean {
	    if (this.authService.isLoggedIn) { 
	    	return true; 
	    }

	    // Store the attempted URL for redirecting
	    this.authService.redirectUrl = url;

	    // Navigate to the login page with extras
	    this.router.navigate(['/login']);
	    return false;
	  }

    // not logged in so redirect to login page with the return url
    //this.router.navigate(['/login', { returnUrl: state.url }]);
    //return false;
}