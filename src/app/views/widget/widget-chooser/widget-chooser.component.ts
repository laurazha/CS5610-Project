import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {CourseService} from '../../../services/course.service.client';
import {Course} from '../../../models/course.model.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  courseId: string;
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private courseService: CourseService) {
    this.course = new Course(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params['cid'];
      this.courseService.findCourseById(this.courseId).subscribe(
        (course: Course) => {
          this.course = course;
        },
        (error: any) => console.log(error)
      );
    });
  }

  createWidget(type: string) {
    let widget = new Widget(null, type, this.courseId, null, null, null);
    this.widgetService.createWidget(this.courseId, widget).subscribe(
      (data: Widget) => {
        widget = data;
        this.router.navigate(['../', widget._id], { relativeTo: this.route });
      },
      (error: any) => console.log(error)
    );
  }


}
