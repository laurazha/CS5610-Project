import { Component, OnInit } from '@angular/core';
import {Course} from '../../../models/course.model.client';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../services/course.service.client';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-view',
  templateUrl: './widget-view.component.html',
  styleUrls: ['./widget-view.component.css']
})
export class WidgetViewComponent implements OnInit {
  widgets: Widget[];
  courseId: string;
  course: Course;

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params['cid'];
      this.courseService.findCourseById(this.courseId).subscribe(
        (course: Course) => {
          this.course = course;
        },
        (error: any) => console.log(error)
      );
      this.widgetService.findWidgetsByCourseId(this.courseId).subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
        },
        (error: any) => console.log(error)
      );
    });
  }

}
