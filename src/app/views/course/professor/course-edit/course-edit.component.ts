import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../../../services/course.service.client';
import {UserService} from '../../../../services/user.service.client';
import {SharedService} from '../../../../services/shared.service';
import {Course} from '../../../../models/course.model.client';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  errorMsg = '';
  errorFlag: Boolean;
  userId: String;
  courseId: String;
  updatedCourse: any = {};
  name: String;
  description: String;
  courses: any[];
  course: Course;
  constructor(
    private courseService: CourseService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.courseService.findCoursesByUser(this.userId).subscribe(
          (courses: any[]) => {
            this.courses = courses;
          });

        this.courseId = params['cid'];
        this.courseService.findCourseById(this.courseId).subscribe(
          (course: any) => {
            this.updatedCourse = course;
          }
        );
      });
  }

  updateCourse(course) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (course.name == null || course.name.trim() === '') {
      this.errorFlag = true;
      this.errorMsg = 'Course Name cannot be empty';
      return;
    }

    if (!this.errorFlag) {
      this.courseService.updateCourse(this.courseId, course).subscribe(
        (course: any) => {
          this.updatedCourse = course;
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        },
        (error: any) => {
        }
      );
    }
  }

  deleteCourse() {
    if (this.courseId != null && this.courseId.trim() !== '') {
      this.courseService.deleteCourse(this.courseId).subscribe(
        (course: any) => {
          // let url: any = '/user/' + this.developerId + '/website';
          // this.router.navigate([url]);
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});

        },
        (error: any) => {
          // Place error message;
        }
      );
    }
  }

  getUser() {
    this.userId = this.sharedService.user['_id'];
  }
}
