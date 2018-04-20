import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  createWidget(courseId: string, widget: Widget) {
    return this._http.post(this.baseUrl + '/api/course/' + courseId + '/widget', widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetsByCourseId(courseId: string) {
    return this._http.get(this.baseUrl + '/api/course/' + courseId + '/widget')
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetById(widgetId: string) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWidgetInServer(widgetId: string, widget: Widget) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWidgetInServer(widgetId: string) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map((response: Response) => {
        return response.json();
      });
  }

  reorderWidgetsInServer(courseId: string, indexes) {
    return this._http.put(this.baseUrl + '/api/course/' + courseId +
      '/widget?initial=' + indexes.startIndex + '&final=' + indexes.endIndex, '')
      .map((response: Response) => {
        return response.json();
      });
  }
}
