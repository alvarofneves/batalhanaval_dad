import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }


    //login() {
    //    this.authService.login(this.model.email, this.model.password)
    //        .subscribe(
    //            data => {
    //                this.router.navigate([this.returnUrl]);
    //            },
    //            error => {
    //                this.alertService.error(error);
    //            });
    //}
}
