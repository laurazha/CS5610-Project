import {Component, OnInit} from '@angular/core';
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

  updateCourse() {
    this.courseService.findCourseById(this.courseId).subscribe(
      (course: Course) => {
        this.course = course;
        this.course.numRating = this.course.numRating.valueOf() + 1;
        this.course.sumRating = this.course.sumRating.valueOf() + (+this.rating);
        this.course.rating = this.course.sumRating.valueOf() / this.course.numRating.valueOf();
        this.course.rating = Math.round(+this.course.rating.valueOf() * 100) / 100;

        this.courseService.updateCourse(this.courseId, this.course).subscribe(
          (course: any) => {
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
          },
        );
      }
    );
  }
}
