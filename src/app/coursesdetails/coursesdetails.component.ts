import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-coursesdetails',
  templateUrl: './coursesdetails.component.html',
  styleUrls: ['./coursesdetails.component.css']
})
export class CoursesdetailsComponent {
  course:any;

  constructor(
    private route:ActivatedRoute,
    private courseService:CourseService
  ) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const courseId = Number(params.get('id'));
      this.course = this.courseService.getCourseById(courseId);
    });
  }

  
}