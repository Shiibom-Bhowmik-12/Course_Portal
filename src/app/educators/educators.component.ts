import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-educators',
  templateUrl: './educators.component.html',
  styleUrls: ['./educators.component.css']
})
export class EducatorsComponent {
  @Input() name:string="";
}
