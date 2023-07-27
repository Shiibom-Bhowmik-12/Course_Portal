import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enrolledcourses',
  templateUrl: './enrolledcourses.component.html',
  styleUrls: ['./enrolledcourses.component.css']
})
export class EnrolledcoursesComponent {

  courses:any = [];
  name:string = "";

  constructor(private router:Router) { }

  logout(){
    Swal.fire('Success','User Logged Out Successfully','success');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.courses = userData.courses || [];
    this.name = userData.userName;
    console.log(this.courses);
  }

  studyCourse(){
    this.router.navigate(['/mycourses']);
  }

}
