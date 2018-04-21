import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {Course} from '../../../../models/course.model.client';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {

  userId: String;
  courses: Course[];

  constructor(private userService: UserService,
              private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.userService.findCoursesByUser(this.userId).subscribe(
  (courses: Course[]) => {
          this.courses = courses;
        }
    );
  }

  deleteCourseForStudent(courseId) {
    console.log('component ts: courseId = ' + courseId);
    this.userService.deleteCourseForStudent(this.userId, courseId).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
