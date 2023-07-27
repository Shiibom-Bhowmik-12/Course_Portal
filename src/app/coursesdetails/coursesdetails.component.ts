import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coursesdetails',
  templateUrl: './coursesdetails.component.html',
  styleUrls: ['./coursesdetails.component.css']
})
export class CoursesdetailsComponent {
  course:any;
  enrollflag:boolean = false;
  enroll:string = "Enroll";

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private courseService:CourseService
  ) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const courseId = Number(params.get('id'));
      this.course = this.courseService.getCourseById(courseId);
    });
  }

  //enrolling the course and saving it into local storage

  handleEnroll() {
    console.log(this.course);
  
    // Retrieve existing user data from local storage
    let userData = JSON.parse(localStorage.getItem('userData') || '{}');
  
    // Check if 'courses' property exists in userData and is present then id is already enrolled else not
    if (!userData.hasOwnProperty('courses')) {
      // If 'courses' property doesn't exist, create it as a new array with the current course
      userData['courses'] = [this.course];
    } else {
      // If 'courses' property exists, push the current course to the existing array
      userData['courses'].push(this.course);
    }
  
    // Save the updated user data back to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    //changing the color of enroll button
    this.enrollflag = !this.enrollflag;
    this.enroll = "Enrolled";
  }
  
  logout(){
    Swal.fire('Success','User Logged Out Successfully','success');
    this.router.navigate(['/home']);
  }
}