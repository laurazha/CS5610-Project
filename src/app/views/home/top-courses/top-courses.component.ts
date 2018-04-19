import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service.client';
import {SharedService} from '../../../services/shared.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../models/course.model.client';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {
  courses: Course[];

  // courses = [{name: 'CS5001', title: 'Racket', rating: 9.3, numRating: 3},
  //   {name: 'CS5002', title: 'Data Structure', rating: 9.0, numRating: 6},
  //   {name: 'CS5003', title: 'OOD', rating: 8.2, numRating: 2}];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
    this.courses = [];
  }

  ngOnInit() {
      this.courseService.topCourses().subscribe(
        (courses: Course[]) => {
          this.courses = courses;
        },
        (error: any) => console.log(error)
      );
  }

}
