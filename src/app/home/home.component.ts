import { Component,OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}

  constructor(private scroller: ViewportScroller) { }

  goToCourses(){
    this.scroller.scrollToAnchor('courses');
  }

  goToFaculty(){
    this.scroller.scrollToAnchor('faculty');
  }

  goToPlacement(){
    this.scroller.scrollToAnchor('placement');
  }

  goToReviews(){
    this.scroller.scrollToAnchor('reviews');
  }

  goToAboutUs(){
    this.scroller.scrollToAnchor('aboutUs');
  }
}
