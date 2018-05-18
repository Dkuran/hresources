import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersMockService } from './../mocks/data-mock.service';

@Injectable()
export class AuthService {
	private users: any = [];

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

	authenticateUser(user: string, pass: string): boolean {
		let isValidUser = false;
		const objectUser = this.users.find((userItem) => {
			console.log(userItem);
			return userItem.user === user;
		});

		if (objectUser) {
			console.log(objectUser);
      objectUser.pass === pass ? (isValidUser = true) : (isValidUser = false);
      // ponerle sesion aqui al usuario para que en el guard solo verifique sesion !!
		}

		return isValidUser;
	}
}
