export class Course {
  _id: String;
  name: String;
  description: String;
  title: String;
  rating: String;

  constructor(_id: String, name: String, description: String, title: String, rating: String) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.title = title;
    this.rating = rating;
  }
}
