export class Widget {
  _id: string;
  type: string;
  courseId: string;
  size: number;
  text: string;
  url: string;

  constructor(id: string, type: string, courseId: string, size: number, text: string, url: string) {
    this._id = id;
    this.type = type;
    this.courseId = courseId;
    this.size = size;
    this.text = text;
    this.url = url;
  }
}
