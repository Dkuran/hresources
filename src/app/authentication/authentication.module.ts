import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule, FormsModule ],
	providers: [ AuthService ],
	declarations: [ LoginComponent ]
})
export class AuthenticationModule {}
