import { Injectable } from '@angular/core';
import { Route, CanLoad, Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanLoad {
	constructor(
		private _router: Router,
		private _http: HttpClient,
		private _authService: AuthService
	) {}

	canLoad(route: Route): boolean {
		if (this._authService.getSession() !== '') {
			return true;
		} else {
			this._router.navigate([ 'login' ]);
		}
	}
}
