import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['../playersRegister/forms.css'] 
})

export class LoginComponent {
    model: any = {};
    returnUrl: string;

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

    onSubmit(form: any) {
        this.authService.login(form.email, form.password)
            .subscribe((result) => {
                if (result) {
                    this.router.navigate(['/lobby']);
                }
            });
        }

    loginGoogle() {
        console.log('login.comp');
        this.authService.sendLoginGoogle();
    }
}