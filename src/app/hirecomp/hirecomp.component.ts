import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hirecomp',
  templateUrl: './hirecomp.component.html',
  styleUrls: ['./hirecomp.component.css']
})
export class HirecompComponent {
  @Input() name:string="";
}
