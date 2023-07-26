import { Component,OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private scroller: ViewportScroller){
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    });  
  }

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
