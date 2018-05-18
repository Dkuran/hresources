import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersMockService } from './mocks/data-mock.service';

@NgModule({
	declarations: [ AppComponent, NotFoundComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthenticationModule,
		BrowserAnimationsModule,
		MatButtonModule,
		DashboardModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(UsersMockService)
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
