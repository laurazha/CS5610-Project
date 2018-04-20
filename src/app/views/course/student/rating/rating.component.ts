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
  rating: Number;

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {
    this.course = new Course(null, null, null, null, 0, 0, 0);
  }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.courseId = params['cid'];
        this.courseService.findCourseById(this.courseId).subscribe(
          (course: Course) => {
            this.course = course;
          }
        );
    });
  }

  getUser() {
    this.userId = this.sharedService.user['_id'];
  }

  updateCourse(course) {
    this.courseService.findCourseById(this.courseId).subscribe(
      (course: Course) => {
          this.course = course;
          console.log(this.rating);
          let sumRating = new Number(this.course.sumRating);
          let numRating = new Number(this.course.numRating);
          numRating = numRating.valueOf() + 1;
          this.course.numRating = numRating;
          let first = sumRating.valueOf();
          let second = this.rating.valueOf();
          this.course.sumRating = Number.parseInt(first.toString()) + Number.parseInt(second.toString());
          console.log(this.course.sumRating);
          this.course.rating = this.course.sumRating.valueOf() / (numRating.valueOf());
          console.log(this.course.rating);
        this.courseService.updateCourse(this.courseId, this.course).subscribe(
            (course: any) => {
              // this.updatedCourse = course;
              this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            },
          );
      }
    );
  }
}
