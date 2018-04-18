import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';

@Component({
  selector: 'app-student-course-new',
  templateUrl: './student-course-new.component.html',
  styleUrls: ['./student-course-new.component.css']
})
export class StudentCourseNewComponent implements OnInit {

  errorFlag: boolean;
  errorMsg = '';
  userId: String;
  courses: any[];
  newCourse: any = {};
  user: User;

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.userService.findUserById(this.userId).subscribe(
  (user: any) => {
        this.user = user;
       }
    );
    this.courseService.findCoursesByUser(this.userId).subscribe(
      (courses: any[]) => {
        this.courses = courses;
      }
    );
  }

  createCourse(course) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (course.name == null || course.name.trim() === '') {
      this.errorMsg = 'Course Name cannot be empty';
      this.errorFlag = true;
      return;
    }
    if (!this.errorFlag) {
      this.courseService.addCourseForStudent(this.userId, course).subscribe(
        (course: any) => {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    }
  }

}
