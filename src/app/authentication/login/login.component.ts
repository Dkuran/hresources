import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

	ngOnInit() {}

	autheticate() {
    if (this._authService.authenticateUser('admin', 'dfgdfg')) {
      this._router.navigate(['/home']);
    }
  }
}
