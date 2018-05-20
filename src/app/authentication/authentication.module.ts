import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';

@NgModule({
	imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
   ],
	providers: [ AuthService ],
	declarations: [ LoginComponent ],
})
export class AuthenticationModule {}
