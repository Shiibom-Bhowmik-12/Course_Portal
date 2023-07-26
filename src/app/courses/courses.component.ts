import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  private _searchTxt: string = '';
  filteredCourses: any[] = [];

  constructor(private router: Router, private courseService: CourseService) {}

  get searchTxt(): string {
    return this._searchTxt;
  }

  set searchTxt(value: string) {
    this._searchTxt = value;
    this.filteredCourses = this._searchTxt ? this.Searching(this._searchTxt) : this.courses;
  }

  Searching(searchBy: string): any[] {
    searchBy = searchBy.toLowerCase();
    return this.courses.filter(course =>
      course.name.toLowerCase().includes(searchBy)
    );
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this._searchTxt = '';
    this.filteredCourses = this.courses;
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    });  
  }

  handleCourse(id: number) {
    this.router.navigate(['coursedetails', id]);
  }


}
