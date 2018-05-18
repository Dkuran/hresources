import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersMockService } from './../../mocks/data-mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _http: HttpClient,
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this._http.get('api/user').subscribe(console.log);
    this._http.get('api/employee').subscribe(console.log);
    this._http.get('api/project').subscribe(console.log);
  }
}
