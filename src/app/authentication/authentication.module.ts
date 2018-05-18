import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule ],
	providers: [ AuthService ],
	declarations: [ LoginComponent ]
})
export class AuthenticationModule {}
