import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      price: 100,
      rating: 4.5,
      educator: 'Angular University',
      rator : 3,
      category : 'Web Development',
      duration : 76
    },
    {
      id: 2,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      price: 50,
      rating: 4.0,
      educator: 'React University',
      rator: 5,
      category : 'Web Development',
      duration: 78
    },
    {
      id: 3,
      name: 'Vue',
      description: 'Vue is a progressive framework for building user interfaces.',
      imageUrl: 'https://vuejs.org/images/logo.png',
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
      description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      price: 25,
      rating: 3.9,
      educator: 'JavaScript University',
      rator: 9,
      category : 'Web Development',
      duration: 45
    },
    {
      id: 5,
      name: 'Node',
      description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
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
      description: 'Python is an interpreted, high-level and general-purpose programming language.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
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
      description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
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
      description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
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
      description: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
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
      description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png',
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
      description: 'PHP is a general-purpose scripting language especially suited to web development.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
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
      description: 'Ruby is an interpreted, high-level, general-purpose programming language.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png',
      price: 175,
      rating: 4.6,
      educator: 'Ruby University',
      rator:6,
      category : 'Programming Language',
      duration: 120
    },
  ];

  getCourses() {
    return this.courses;
  }

  getCourseById(courseId: number) {
    return this.courses.find(x => x.id === courseId);
  }

  constructor() { }
}
