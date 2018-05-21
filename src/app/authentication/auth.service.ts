import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UsersMockService } from './../mocks/data-mock.service';
import { User } from './../shared/user.interface';

@Injectable()
export class AuthService {
	private users: any = [];
	private user: User = {
		user: '',
		pass: '',
		session: ''
	};

	constructor(private _http: HttpClient) {
		this.fetchUsers();
	}

	fetchUsers() {
		this._http.get('api/user').subscribe((userData) => {
			console.log(userData);
			this.users = userData;
		});
		// this._http.get('api/employee').subscribe(console.log);
		// this._http.get('api/project').subscribe(console.log);
	}

	getSession() {
		return this.user.session;
	}

	authenticateUser(user: string, pass: string): boolean {
		let isValidUser = false;
		this.user = this.users.find((userItem) => {
			console.log(userItem);
			return userItem.user === user;
		});

		if (this.user) {
			console.log(this.user);
			this.user.pass === pass ? (isValidUser = true) : (isValidUser = false);
			this.user.session = 'dskjfhsdkjf89457';
			this._http.put('api/user', this.user).subscribe();
		}

		return isValidUser;
	}
}
