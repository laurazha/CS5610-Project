import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../../models/widget.model.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {FlickrService} from '../../../../../services/flickr.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;
  widget: Widget;
  courseId: string;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.courseId = params['cid'];
        this.widgetId = params['wgid'];
        this.widgetService.findWidgetById(params['wgid']).subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
      }
    );
  }

  searchPhotos() {
    this.flickrService.searchPhotos(this.searchText).subscribe(
      (data: any) => {
        let val = data._body;
        val = val.replace('jsonFlickrApi(', '');
        val = val.substring(0, val.length - 1);
        val = JSON.parse(val);
        this.photos = val.photos;
      }
    );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    // const widget = {
    //   pageId : this.pageId,
    //   url: url
    // };
    this.widget.url = url;

    this.widgetService.updateWidgetInServer(this.widgetId, this.widget).subscribe(
      (data: any) => {
        const result = data;
        if (result) {
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        } else {
          this.error = 'failed!';
        }
      }
    );
  }

}
