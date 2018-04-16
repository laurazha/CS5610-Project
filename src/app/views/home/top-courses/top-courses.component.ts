import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {

  courses = [{name: 'CS5001', title: 'Racket', rating: 9.3, numRating: 3},
    {name: 'CS5002', title: 'Data Structure', rating: 9.0, numRating: 6},
    {name: 'CS5003', title: 'OOD', rating: 8.2, numRating: 2}];

  constructor() { }

  ngOnInit() {
  }

}
