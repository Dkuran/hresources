import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: [ './not-found.component.scss' ]
})
export class NotFoundComponent implements OnInit {
  public seconds = 3;
  public temporize;
	constructor(private _route: Router) {}

	ngOnInit() {
    this.temporize = setInterval(() => {
      this.seconds -= 1;
      console.log(this.seconds);
    }, 1000);
    this.redirecToLogin();
	}

	redirecToLogin() {
		setTimeout(() => {
      clearInterval(this.temporize);
			console.log('envia!');
			this._route.navigate([ '' ]);
		}, 3000);
	}
}
