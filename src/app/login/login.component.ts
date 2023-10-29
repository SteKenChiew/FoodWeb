import { Component, ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(private router: Router, private location: Location){

  }

  goHome() {
    this.router.navigate(['']);
    this.location.go(this.location.path());
  }

}
