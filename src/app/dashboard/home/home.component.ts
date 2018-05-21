import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showMenu = true;
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    // this._router.navigate(['home/dashboard']);
  }

  logout() {
    this._authService.logOutUser();
    // this._router.navigateByUrl('');
  }


}
