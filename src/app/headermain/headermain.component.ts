import { Component,OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headermain',
  templateUrl: './headermain.component.html',
  styleUrls: ['./headermain.component.css']
})
export class HeadermainComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<boolean>();
  menuStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus);
  }
}
