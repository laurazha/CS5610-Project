import { Component, OnInit } from '@angular/core';
import {Course} from '../../../../models/course.model.client';
import {CourseService} from '../../../../services/course.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';

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
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    return this.courseService.findCoursesByUser(this.userId).subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
  }

  delete(course: Course) {
    this.courseService.deleteCourse(course.courseId).subscribe(
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
