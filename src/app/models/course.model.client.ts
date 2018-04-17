export class Course {
  _id: String;
  name: String;
  courseId: String;
  description: String;
  title: String;
  rating: String;

  constructor(_id: String, name: String, websiteId: String, description: String, title: String, rating: String) {
    this._id = _id;
    this.name = name;
    this.courseId = websiteId;
    this.description = description;
    this.title = title;
    this.rating = rating;
  }
}
