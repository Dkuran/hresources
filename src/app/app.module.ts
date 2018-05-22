import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersMockService } from './mocks/data-mock.service';

import { AuthGuard } from './auth-guard.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

	declarations: [ AppComponent, NotFoundComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthenticationModule,
		HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(UsersMockService),
    FormsModule,
    ReactiveFormsModule
	],
	providers: [ AuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
