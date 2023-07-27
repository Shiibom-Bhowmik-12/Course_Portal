import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.djgbdkgbdgsjgbskg,sjbgsbgsgbksgbk',
      imageUrl: 'assets/angular.jpg',
      price: 100,
      rating: 4.5,
      educator: 'Angular University',
      rator : 3,
      category : 'Web Development',
      duration : 76
    },
    {
      id: 2,
      name: 'Data Science',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/datascience.jpg',
      price: 50,
      rating: 4.0,
      educator: 'Data Science University',
      rator: 5,
      category : 'Data Science',
      duration: 78
    },
    {
      id: 3,
      name: 'Vue',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/vuejs.jpeg',
      price: 75,
      rating: 4.2,
      educator: 'Vue University',
      rator: 4,
      category : 'Web Development',
      duration: 39
    },
    {
      id: 4,
      name: 'JavaScript',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/js.png',
      price: 25,
      rating: 3.9,
      educator: 'JavaScript University',
      rator: 9,
      category : 'Web Development',
      duration: 45
    },
    {
      id: 5,
      name: 'NodeJs',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/nodejs.jpg',
      price: 150,
      rating: 4.8,
      educator: 'Node University',
      rator: 10,
      category : 'Web Development',
      duration: 67
    },
    {
      id: 6,
      name: 'Python',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/python.jpg',
      price: 200,
      rating: 4.9,
      educator: 'Python University',
      rator: 8,
      category : 'Programming Language',
      duration: 89
    },
    {
      id: 7,
      name: 'Java',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/java.jpeg',
      price: 125,
      rating: 4.7,
      educator: 'Java University',
      rator:3,
      category : 'Programming Language',
      duration: 56
    },
    {
      id: 8,
      name: 'C++',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/c++.png',
      price: 175,
      rating: 4.6,
      educator: 'C++ University',
      rator:4,
      category : 'Programming Language',
      duration: 78
    },
    {
      id: 9,
      name: 'C',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/C.jpg',
      price: 100,
      rating: 4.5,
      educator: 'C University',
      rator:1,
      category : 'Programming Language',
      duration: 15
    },
    {
      id: 10,
      name: 'C#',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks',
      imageUrl: 'assets/csharp.jpg',
      price: 150,
      rating: 4.8,
      educator: 'C# University',
      rator:2,
      category : 'Programming Language',
      duration: 34
    },
    {
      id: 11,
      name: 'PHP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks sigb kjdbg isbg',
      imageUrl: 'assets/php.jpg',
      price: 125,
      rating: 4.7,
      educator: 'PHP University',
      rator:5,
      category : 'Web Development',
      duration: 90
    },
    {
      id: 12,
      name: 'Ruby',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed velit aperiam quas ad accusamus expedita sunt quis, minima odit!skk bksgbjs bgksjbgks gbks.',
      imageUrl: 'assets/ruby.jpg',
      price: 175,
      rating: 4.6,
      educator: 'Ruby University',
      rator:6,
      category : 'Programming Language',
      duration: 120
    },
    {
      id: 13,
      name: 'ReactJs',
      description: 'React is a JavaScript library for building user interfaces.sskbgfksbg kjsbfksbg kshfbgbks hvsj su sfkbskf usjfbvjs subv sufbv',
      imageUrl: 'assets/reactjs.png',
      price: 200,
      rating: 4.9,
      educator: 'React University',
      rator:7,
      category : 'Web Development',
      duration: 45
    },
    {
      id: 14,
      name: 'Data Structures and Algorithms',
      description: 'A data structure is a particular way of organizing data in a computer so that it can be used effectively.',
      imageUrl: 'assets/dsa.jpg',
      price: 150,
      rating: 4.8,
      educator: 'DSA University',
      rator:8,
      category : 'DSA',
      duration: 67
    },
    {
      id: 15,
      name: 'Machine Learning',
      description: 'Machine learning is the study of computer algorithms that improve automatically through experience.jsbfjsf jsbfjs jsbf sjbf',
      imageUrl: 'assets/ml.png',
      price: 200,
      rating: 4.9,
      educator: 'ML University',
      rator:9,
      category : 'Data Science',
    }
  ];

  getCourses() {
    return this.courses;
  }

  getCourseById(courseId: number) {
    return this.courses.find(x => x.id === courseId);
  }

  constructor() { }
}
