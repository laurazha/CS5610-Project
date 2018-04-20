import {Component, OnInit, ViewChild} from '@angular/core';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {Course} from '../../../../models/course.model.client';

@Component({
  selector: 'app-professor-course-new',
  templateUrl: './professor-course-new.component.html',
  styleUrls: ['./professor-course-new.component.css']
})
export class ProfessorCourseNewComponent implements OnInit {
  @ViewChild('f') courseForm: NgForm;
  errorFlag: boolean;
  errorMsg = '';
  userId: String;
  courses: any[];
  newCourse: Course;
  courseName: String;
  courseTitle: String;

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.courseService.findCourses(this.userId).subscribe(
      (courses: any[]) => {
        this.courses = courses;
      }
    );
  }

  createCourse() {
    this.errorFlag = false;
    this.errorMsg = '';
    this.courseName = this.courseForm.value.name;
    this.courseTitle = this.courseForm.value.title;

    if (this.courseName == null || this.courseName.trim() === '') {
      this.errorMsg = 'Course Name cannot be empty';
      this.errorFlag = true;
      return;
    }

    this.courseService.findCourseByName(this.courseName).subscribe(
      (course: any) => {
        this.newCourse = course;
        if (this.newCourse != null) {
          this.errorFlag = true;
          this.errorMsg = 'This course has already existed!';
        } else {
          this.errorFlag = false;
          this.newCourse = new Course(undefined, this.courseName, undefined, this.courseTitle, undefined, undefined, undefined);
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
    );
  }
}
