import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResourcesService {
	public resource: any;
	constructor(private _http: HttpClient) {}

	fetchResources(url): Observable<any> {
		return this._http.get(url);
	}

	deleteResource(url, id): Observable<any> {
		const newUrl = url + '/' + id;
		return this._http.delete(newUrl);
	}

	saveResource(url, resource): Observable<any> {
		return this._http.post(url, resource);
	}

	getResource(url, id): Observable<any> {
		const newUrl = url + '/' + id;
		return this._http.get(newUrl);
	}

	editResource(url, resource) {
    return this._http.put(url, resource);
  }
	// this._http.post('api/user', { user: 'admin', pass: '1234', session: '' }).subscribe();
	// this.fetchUsers();
	// this._http.delete('api/user/' + this.user.id).subscribe();
	// this.fetchUsers();
}
