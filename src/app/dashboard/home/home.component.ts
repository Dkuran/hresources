import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showMenu = true;
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    // this._router.navigate(['home/dashboard']);
  }

  logout() {

  }


}
