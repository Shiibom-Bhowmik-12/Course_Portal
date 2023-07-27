import { Component,OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headermain',
  templateUrl: './headermain.component.html',
  styleUrls: ['./headermain.component.css']
})
export class HeadermainComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<boolean>();
  menuStatus:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {}

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus);
  }

  logout(){
    Swal.fire('Success','User Logged Out Successfully','success');
    this.router.navigate(['/home']);
  }
}
