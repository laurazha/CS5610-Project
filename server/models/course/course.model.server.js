var mongoose = require('mongoose');
var CourseSchema = require('./course.schema.server');
var CourseModel = mongoose.model('CourseModel', CourseSchema);
var UserModel = require("../user/user.model.server");

CourseModel.createCourseForProf = createCourseForProf;
CourseModel.findCourseById = findCourseById;
CourseModel.findCourseByName = findCourseByName;
CourseModel.updateCourse = updateCourse;
CourseModel.deleteCourse = deleteCourse;
CourseModel.topCourses = topCourses;
CourseModel.deleteCoursesByProf = deleteCoursesByProf;
CourseModel.findCoursesByIds = findCoursesByIds;

module.exports = CourseModel;

function createCourseForProf(userId, course) {
  course._professor = userId;
  return CourseModel.create(course)
    .then(function (responseCourse) {
      UserModel.findUserById(userId)
        .then(function (user) {
          user.courses.push(responseCourse._id);
          return user.save();
        });
      return responseCourse;
    });
}

function findCourseById(courseId) {
  return CourseModel.findById(courseId);
}

function findCourseByName(courseName) {
  return CourseModel.findOne({name: courseName});
}

function updateCourse(courseId, course) {
  return CourseModel.findByIdAndUpdate(courseId, course);
}

function deleteCourse(courseId) {
  return CourseModel.findByIdAndRemove(courseId);
  // return CourseModel.findOne({_id: courseId})
  //   .then(function(course) {
  //     var userId = course._user;
  //     CourseModel.remove({id: courseId})
  //       .then(function() {
  //         return UserModel.deleteCourse(userId, courseId);
  //       })
  //   })
}

function topCourses() {
  return CourseModel.find({}).sort({rating: -1}).exec();
}

function deleteCoursesByProf(userId) {
  return CourseModel.remove({_professor: userId});
}

function findCoursesByIds(courseIds) {
  return CourseModel.find({
    '_id': {$in: courseIds}
  }, function (err, docs) {
  });
}
