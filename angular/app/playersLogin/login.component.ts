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
        console.log('on submit'); 
    }

    onSubmit(form: any) { 
        this.authService.login(form.email, form.password) 
        .subscribe((result) => { 
            if (result) { 
                this.router.navigate(['/lobby']); 

            } 
        }); 
    } 

    login(form : any) {
        console.log(form);
        console.log(form.email);
        console.log(form.password);
        this.loading = true;

        this.authService.login(form.email, form.password)
          .subscribe(result => {
                //if (result = true) {
                       console.log('login successful');
                this.alertService.success('Loggin successful', true);
                this.router.navigate(['/lobby']);
                 //} else {
                    //login failed
                   //  this.error = 'Username or password is incorrect';
                     //this.loading = false;
                    // }
                });
            }
            
            

    //loginGoogle() {
    //    console.log('login.comp');
    //    this.authService.sendLoginGoogle();
    //}
}
