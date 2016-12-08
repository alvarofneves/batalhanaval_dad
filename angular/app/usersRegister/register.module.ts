import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { SharedModule }               from '../shared/shared.module';
import { UserFormRegisterComponent } from './register.component';
//import { HeroFormTemplate2Component } from './hero-form-template2.component';

@NgModule({
  imports:      [ SharedModule, FormsModule ],
  declarations: [ UserFormRegisterComponent ],
  exports:      [ UserFormRegisterComponent ]
})
export class HeroFormTemplateModule { }
