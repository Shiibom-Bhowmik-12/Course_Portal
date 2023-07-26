import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName:string="";
  userEmail:string="";
  userPassword:string="";

  constructor(private router:Router) { }

  successNotification(){
    Swal.fire('Success','User Registered Successfully','success');
  }

  onSubmit(){
    const userData = {userName:this.userName,userEmail:this.userEmail,password:this.userPassword};
    console.log(userData);
    localStorage.setItem('userData',JSON.stringify(userData));
    this.successNotification();
    this.router.navigate(['/login']);
  }

}
