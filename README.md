## Detailed steps to test the following features:
### Visit as Guest:
1. View the photo slideshow.
2. View a calendar of US. holidays. (3rd-party API: Google Calendar)
3. View a map. Our school has been set as the destination. Click on Directions to find a way to school. (3rd-party API: Google Maps)
4. View the top-rated courses: 
* Click on the "Top Courses" button. 
* This page shows all the courses from the highest rating to the lowest. It also shows how many ratings a course has received, so people can make a better judge. 
### Visit as Student: 
1. Login
* Click the Login button in homepage.
* Choose your role: Student
* Enter Username: alice
* Enter Password: alice
* Click the "Login" button. This will lead you to the student dashboard.
* Alternatively, click the "Login with Facebook" button. Only students can login with facebook. If you choose a role of professor or admin, this button will be hidden.
2. Register
* Click the Register button in homepage.
* Choose your role: Student
* Fill in all the listed info. They are all required because it's a school!
* Click Register to go to your dashboard.
3. View course list
* Click the "View your courses" button in the dashboard.
* This page lists all the courses alice has enrolled. 
* Below are some actions you can take on these courses.
4. Enroll in a course
* Click the "Add new course" button in the course list.
* Search for a course name. 
* Examples: <br/>Enter "CS5610" to add this course. <br/>Enter "noooo" to see an alert "This course does not exist!". <br/>Enter "CS5001" to jump back to course list and nothing happens because alice already takes this course.
5. Rate a course
* In the course list, click on the "Rate" button next to a course. 
* Drag or click on the slider to choose a rating. 
* Click Submit. 
6. Drop a course
* In the course list, click on the "Delete" button next to a course.
* This course will be removed from alice's course list.
7. View a course's website
* In the course list, click a course name to go to its website. 
* Students can only view the course website. 
8. View top-rated courses
* In alice's dashboard, click on the "View top-rated courses" button.
* This page will be exactly as what guests can see. Click on the "back" button will lead you to homepage. But alice will remain logged in. So click login again will go to alice's dashboard.
9. Log out
* In dashboard, click "Log out" button. 
* If you don't explicitly log out, you cannot log in to another account or register for a new account, for security reason.

### Visit as Professor:
1. Login
* Click the Login button in homepage.
* Choose your role: Professor
* Enter Username: bob
* Enter Password: bob
* Click the "Login" button. This will lead you to the professor dashboard.
2. Register
* Click the Register button in homepage.
* Choose your role: Professor
* Fill in all the listed info. They are all required because it's a school!
* Click Register to go to your dashboard.
3. View course list
* Click the "View your courses" button in the dashboard.
* This page lists all the courses this professor teaches. 
* Below are some actions you can take on these courses.
4. Add a new course
* Click the "Add new course" button in the course list.
* Enter a new course name and a course title. 
* Examples: <br/>Enter "CS5004" as the name and "OOD" as the title to add a course. <br/>Enter "CS5001" as the name and whatever as the title to see an alert "This course has already existed!".
5. Edit a course
* In the course list, click on the "Edit" button next to a course. 
* Update any info you like. 
* Notice that this update is cascade: If a student has enrolled in this course, any update on the course will be reflected in the student's course list as well. 
6. Delete a course
* In the course list, click on the "Delete" button next to a course.
* This course will be removed from: the professor's course list, the courses database, and the course lists of any students who have enrolled in this course (i.e. cascade delete).
7. Enter a course's website
* In the course list, click a course name to go to its website. 
* Professor can now add or edit a widget in this course website. 
8. Add/Edit a widget in course website
* This part should be very similar to our assignment. We removed some unnecessary fields for better user experience. Sortable and image upload are implemented. Flickr is implemented as well. (3rd-party API with Search).
9. Log out
* In dashboard, click "Log out" button. 

### Visit as Admin:
1. Login
* Click the Login button in homepage.
* Choose your role: Admin
* Enter Username: admin
* Enter Password: admin
* Click the "Login" button. This will lead you to the admin dashboard.
2. Register
* Click the Register button in homepage.
* Choose your role: Admin
* Fill in all the listed info. They are all required because it's a school!
* Click Register to go to your dashboard.
3. Edit Professors
* This page shows a list of all the professors with their personal info.
* Add, edit or delete a professor as you like.
* Notice that deleting a professor will delete all the courses he/she teaches, from courses database, and from students' course lists if enrolled.
4. Edit Students
* This page shows a list of all the students with their personal info.
* Add, edit or delete a student as you like.
5. Edit Personal Info
* This page shows admin's own personal info.
* Edit or delete as you like.
6. Logout
* Click the Logout button in dashboard.
