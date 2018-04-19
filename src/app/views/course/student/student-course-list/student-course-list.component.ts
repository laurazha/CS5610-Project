import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {Course} from '../../../../models/course.model.client';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {

  userId: String;
  courses: Course[];

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    console.log(this.userId);
    this.courseService.findCoursesByUser(this.userId).subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        console.log(this.courses.length);
      }
    );
  }

}
