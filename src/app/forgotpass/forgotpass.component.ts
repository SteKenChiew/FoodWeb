import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {

  constructor(private router: Router){

  }

  goVerification() {
    this.router.navigate(['/verification']);
  }

}
