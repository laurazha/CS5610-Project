import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {Course} from '../../../../models/course.model.client';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  errorFlag: boolean;
  errorMsg = '';
  userId: String;
  courseId: String;
  courses: any[];
  course: Course;
  updatedCourse: any = {};
  newRating: String;

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.courseService.findCoursesByUser(this.userId).subscribe(
          (courses: any[]) => {
            this.courses = courses;
          }
        );
        this.courseId = params['cid'];
    });
  }

  getUser() {
    this.userId = this.sharedService.user['_id'];
  }

  updateCourse(course) {
    this.courseService.updateCourse(this.courseId, course).subscribe(
      (course: any) => {
        this.updatedCourse = course;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      },
    );
  }
}
