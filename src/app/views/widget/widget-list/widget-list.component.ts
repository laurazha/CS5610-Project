import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../models/course.model.client';
import {CourseService} from '../../../services/course.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: Widget[];
  courseId: string;
  course: Course;

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetService,
              private courseService: CourseService) {
    this.course = new Course(null, null, null,
      null, null, null, null);
    this.widgets = [];
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
      this.widgetService.findWidgetsByCourseId(this.courseId).subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
        },
        (error: any) => console.log(error)
      );
    });
  }

  reorderWidgets(indexes) {
    this.widgetService.reorderWidgetsInServer(this.courseId, indexes).subscribe(
      () => {},
      (error: any) => console.log(error)
    );
  }

}
