import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  tinyAlert() {
    Swal.fire('Oops...', 'Invalid Credentials', 'error');
  }

  onSubmit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log(userData);
    if (
      userData.userEmail == this.userEmail &&
      userData.password == this.userPassword
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      this.tinyAlert();
      this.router.navigate(['/login']);
    }
  }
}
