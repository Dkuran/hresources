import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	public userName: string;
	public userPass: string;

	constructor(private _authService: AuthService, private _router: Router) {}

	ngOnInit() {}

	autheticate() {
		if (this._authService.authenticateUser(this.userName, this.userPass)) {
			this._router.navigate([ '/home' ]);
		} else {
			this.cleanFields();
		}
	}

	cleanFields() {
		this.userName = '';
		this.userPass = '';
	}
}
