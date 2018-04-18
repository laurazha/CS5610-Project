import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {UserService} from '../../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';
import {Course} from '../../../../models/course.model.client';

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
  user: User;
  courseName: String;
  courseId: String;
  course: Course;

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

  createCourse() {
    this.errorFlag = false;
    this.errorMsg = '';
    if (this.courseName == null || this.courseName === '') {
      this.errorMsg = 'Course Name cannot be empty';
      this.errorFlag = true;
      return;
    }
    if (!this.errorFlag) {
      this.courseService.findCourseByName(this.courseName).subscribe(
        (course: Course) => {
          this.course = course;
          this.courseId = course._id
          this.courseService.addCourseForStudent(this.userId, this.course._id).subscribe(
            (course: any) => {
              this.router.navigate(['../'], {relativeTo: this.activatedRoute});
            }
          );
        }
      );
    }
  }

}
