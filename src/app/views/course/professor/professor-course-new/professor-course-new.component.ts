import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-professor-course-new',
  templateUrl: './professor-course-new.component.html',
  styleUrls: ['./professor-course-new.component.css']
})
export class ProfessorCourseNewComponent implements OnInit {

  errorFlag: boolean;
  errorMsg = '';
  userId: String;
  courses: any[];
  newCourse: any = {};

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.courseService.findCoursesByUser(this.userId).subscribe(
      (courses: any[]) => {
        this.courses = courses;
      }
    );
  }

  createCourse() {
    this.errorFlag = false;
    this.errorMsg = '';
    if (this.newCourse.name == null || this.newCourse.name.trim() === '') {
      this.errorMsg = 'Course Name cannot be empty';
      this.errorFlag = true;
      return;
    }

    this.courseService.findCourseByName(this.newCourse.name).subscribe(
      (course: any) => {
        this.newCourse = course;
      }
    );

    if (this.newCourse != null) {
        this.errorFlag = true;
        this.errorMsg = 'This course has already exists!';
    }

    if (!this.errorFlag) {
      this.courseService.createCourse(this.userId, this.newCourse).subscribe(
        (course: any) => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        },
        (error: any) => {
          // Place an error message here
        }
      );
    }
  }
}
