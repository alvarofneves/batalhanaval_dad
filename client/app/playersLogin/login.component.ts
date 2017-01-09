import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthService } from '../_services/index';
import { Player }                    from '../_shared/index';  

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['../playersRegister/forms.css'] 
})

export class LoginComponent {
    model: any = {};
    loading = false;
    error = '';
    returnUrl: string; 

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private alertService: AlertService) { } 

    ngOnInit() {
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/' 
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

    login(form: any) {
        this.loading = true;
        this.authService.login(form.email, form.password)
          .subscribe(result => {
                console.log('login successful');
                this.alertService.success('Loggin successful', true);
                this.router.navigate(['/lobby']);
               });
          //alterar estado do jogador
          //console.log(result.id);
      }
}