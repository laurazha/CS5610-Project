module.exports = function(app) {
  app.post("/api/user/:userId/course", createCourse);
  app.get("/api/user/:userId/course", findAllCoursesForUser);
  app.get("/api/course/:courseId", findCourseById);
  app.put("/api/course/:courseId", updateCourse);
  app.delete("/api/course/:courseId", deleteCourse);
  // app.get("/api/course/course?name=courseName", findCourseByName);
  app.get("/api/coursename/:courseName", findCourseByName);
  // app.put("/api/user/:userId/course/:courseId", addCourseForStudent);
  app.get("/api/topcourses", topCourses);

  //var course_name = req.query.name
  // courseMode.findByName(course_name).then();

  var courseModel = require("../models/course/course.model.server");

  function createCourse(req, res) {
    var userId = req.params.userId;
    var course = req.body;
    courseModel.createCourseForUser(userId, course).then(
      function (course) {
        if (course) {
          res.json(course);
        } else {
          res.sendStatus(400).send("Something went wrong");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function addCourseForStudent(req, res) {
    var userId = req.params.userId;
    var courseId = req.params.courseId;
    courseModel.addCourseForStudent(userId, courseId).then(
      function(course) {
        if(course) {
          res.json(course);
        } else {
          res.sendStatus(400).send("Something went wrong");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findAllCoursesForUser(req, res) {
    var userId = req.params['userId'];
    courseModel.findAllCoursesForUser(userId).then(
      function (courses) {
        res.json(courses);
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findCourseById(req, res) {
    var courseId = req.params.courseId;
    courseModel.findCourseById(courseId).then(
      function (course) {
        if (course) {
          res.json(course);
        } else {
          res.sendStatus(400).send("Cannot find course with corresponding Id");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findCourseByName(req, res) {
    // var courseName = req.query.name;
    var courseName = req.params.courseName;
    courseModel.findCourseByName(courseName).then(
      function (course) {
        res.json(course);
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );

  }

  function updateCourse(req, res) {
    var courseId = req.params.courseId;
    var updatedCourse = req.body;
    courseModel.updateCourse(courseId, updatedCourse).then(
      function (course) {
        if (course) {
          res.json(course);
        } else {
          res.sendStatus(400).send("Cannot find course with corresponding Id");
        }
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function deleteCourse(req, res) {
    var courseId = req.params.courseId;
    courseModel.deleteCourse(courseId).then(
      function (course) {
        res.json(course);
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function topCourses(req, res) {
    courseModel.topCourses().then(
      function (courses) {
        res.json(courses);
      },
      function (err) {
        res.sendStatus(400).send(err);
      }
    );
  }
};


