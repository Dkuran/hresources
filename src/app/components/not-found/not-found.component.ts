import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit() {
    // this._route.navigate(['/login']);
    setTimeout(
      () => {
        console.log('envia!');
        this._route.navigate(['login']);
      }, 3000
    );
  }

}
