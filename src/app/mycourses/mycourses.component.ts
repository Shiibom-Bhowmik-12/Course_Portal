import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  sideNavStatus:boolean = false;
  courses:any = [];
  name:string = '';

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.courses = userData.courses || [];
    this.name = userData.userName;
    console.log(this.courses);
  }
}
