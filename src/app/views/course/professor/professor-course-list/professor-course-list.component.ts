import { Component, OnInit } from '@angular/core';
import {Course} from '../../../../models/course.model.client';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-professor-course-list',
  templateUrl: './professor-course-list.component.html',
  styleUrls: ['./professor-course-list.component.css']
})
export class ProfessorCourseListComponent implements OnInit {

  userId: String;
  courses: Course[];

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    return this.courseService.findCourses(this.userId).subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
  }

  deleteCourse(courseId: string) {
    this.courseService.deleteCourse(courseId).subscribe(
      (course: any) => {
        this.ngOnInit();
      },
      (error: any) => {
        // Place error message;
      }
    );
  }
}
