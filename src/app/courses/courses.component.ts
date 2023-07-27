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
  filteredCourses: any[] = [];
  private _searchTxt: string = '';

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    this._searchTxt = '';
    this.filteredCourses = this.courses;

    //scrolling the window to the top while navigating to this component
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    });  
  }

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

  //to route specific course page
  handleCourse(id: number) {
    this.router.navigate(['coursedetails', id]);
  }

  sortByRatingIncreaseToDecrease(){
    this.filteredCourses.sort((a,b) => {
      return a.rating - b.rating;
    });
  }

  sortByRatingDecreaseToIncrease(){
    this.filteredCourses.sort((a,b) => {
      return b.rating - a.rating;
    });
  }

  sortByPriceIncreaseToDecrease(){
    this.filteredCourses.sort((a,b) => {
      return a.price - b.price;
    });
  }

  sortByPriceDecreaseToIncrease(){
    this.filteredCourses.sort((a,b) => {
      return b.price - a.price;
    });
  }

  category: string = '';
  categoryFilter: any[] = [];
  sortByCategory(category:string){
      this.category = category;
      this.categoryFilter = this.courses.filter((course: any) => {
        return course.category === this.category;
      });
      this.filteredCourses = this.categoryFilter;
  }

  viewAll(){
    this.filteredCourses = this.courses;
  }
}

