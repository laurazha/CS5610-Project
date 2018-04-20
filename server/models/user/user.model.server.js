var mongoose = require ("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel =  mongoose.model("UserModel", UserSchema);
// var CourseModel = require("../course/course.model.server");

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findAllUsers = findAllUsers;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.findAllProfessors = findAllProfessors;
UserModel.findAllStudents = findAllStudents;
// UserModel.addCourseForStudent = addCourseForStudent;
// UserModel.findCoursesByUser = findCoursesByUser;

module.exports = UserModel;

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}

function createUser(user){
  return UserModel.create(user);
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function findUserByUsername(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers() {
  return UserModel.find({});
}

function findAllProfessors() {
  return UserModel.find({type: 'PROFESSOR'});
}

function findAllStudents() {
  return UserModel.find({type: 'STUDENT'});
}

function updateUser(userId, user) {
  return UserModel.findByIdAndUpdate(userId, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

// function addCourseForStudent(userId, courseId) {
//   return CourseModel.findCourseById(courseId).
//     then(function(responseCourse) {
//       UserModel.findUserById(userId)
//         .then(function(user){
//           user.courses.push(responseCourse);
//           return user.save();
//         });
//       return responseCourse;
//     });
// }

// function findCoursesByUser(userId) {
//   var courses = [];
//   UserModel.findById(userId)
//     .then(function (user) {
//       courses = user.courses;
//     });
//   return courses;
// }
