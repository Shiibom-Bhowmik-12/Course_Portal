import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-studfeed',
  templateUrl: './studfeed.component.html',
  styleUrls: ['./studfeed.component.css']
})
export class StudfeedComponent {
  @Input() name:string="";
  
  feedbacks = [
    {
      name: 'Shibom Bhowmik',
      feedback: 'This is a very good website. I am very happy to use it.',
      company: 'Google',
      logo: 'assets/pp.jpg',
      linkedin: 'https://www.linkedin.com/in/shibom-bhowmik-9709081b8/',
      course : 'Mastering Data Structures & Algorithms using C and C++'
    },
    {
      name : 'Rahul Chaurasiya',
      feedback : 'This is a very good website with all detailed content Thanks for changing my life.',
      company : 'Microsoft',
      logo: 'assets/rahul.jpeg',
      linkedin : 'https://www.linkedin.com/in/RahulRazj/',
      course : 'React - The Complete Guide 2023(React Router & Redux)'
    },
    {
      name : 'Shalini Singh',
      feedback : 'This is a very good website. I am very happy to use it. Thank you for the valuable guidance.The courses are well structured.',
      company : 'Kongsberg Digital',
      logo: 'assets/shalini.jpg',
      linkedin : 'https://www.linkedin.com/in/sheisshalini/',
      course : 'NodeJS - The Complete Guide'
    },
    {
      name : 'Rohit Nandy',
      feedback : 'This is a very good website. I am very happy to use it.Thank you for the valuable guidance. The courses are well structured. ',
      company : 'Amazon',
      logo: 'assets/rohit.jpeg',
      linkedin : 'https://www.linkedin.com/in/rohit-nandy39/',
      course : 'Python Bootcamp From Zero to Hero in Python'
    }
  ];
}
