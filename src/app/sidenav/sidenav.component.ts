import { Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus:boolean= false;

  list=[
    {
      number:'1',
      name:'Home',
      routername:'home',
      icon:'fa-solid fa-house',
    },
    {
      number:'2',
      name:'Analystics',
      routername:'analytics',
      icon:'fa-solid fa-chart-line',
    },
    {
      number:'3',
      name:'Chat',
      routername:'chat',
      icon:'fa-solid fa-comment',
    },
    {
      number:'4',
      name:'Uploaded assignments',
      routername:'assignments',
      icon:'fa-solid fa-folder',
    },
    {
      number:'5',
      name:'Mailbox',
      routername:'mailbox',
      icon:'fa-solid fa-envelope',
    },
    {
      number:'6',
      name:'Orders',
      routername:'orders',
      icon:'fa-solid fa-shopping-cart',
    },
    {
      number:'7',
      name:'Tasks',
      routername:'tasks',
      icon:'fa-solid fa-tasks',
    },
    {
      number:'8',
      name:'Live Classes',
      routername:'zoom',
      icon:'fa-solid fa-video',
    },
    {
      number:'9',
      name:'Your Courses',
      routername:'courses',
      icon:'fa-solid fa-book',
    },
    {
      number:'10',
      name:'Dashboard',
      routername:'dashboard',
      icon:'fa-solid fa-right-to-bracket',
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
