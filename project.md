##CS5610 Project  
GitHub Link:  https://github.com/laurazha/CS5610-Project
Heroku Link:  https://cs5610-project-xiaoshuang.herokuapp.com
  
###Project Description  
***
This is a course website that allows student and professor to add, edit and rate courses.  
Our website contains 4 kinds of users: Student, Professor, Admin, Guest.  

###User Info  
***
Admin:  admin is able to manage all the users. 
username: admin
password: admin  

Guest: guest can view homepage, and this school's top courses that are rated by students  
Guest doesn't need to login  

Professor: professor can view, add, edit, delete their courses  
username: bob   
password: bob  

Student: student can view, add, delete, rate their courses.  
username: alice  
password: alice  

###Project Components   
*** 
#####Homepage: https://cs5610-project-xiaoshuang.herokuapp.com 
In the homepage, there is a description about our school, a calender, and google map(which is our third party API). It shows the location of our school. It will directs you to google map when you click 'directions'. User can choose to login, register or view top rated courses without login.  

#####Login: https://cs5610-project-xiaoshuang.herokuapp.com/login 
In the login page, user need to choose their login type: student, professor or admin and then type the username and password to login. User can also login with his/her facebook account. If user choose to login with facebook, they can only login as stundet.

#####Register: https://cs5610-project-xiaoshuang.herokuapp.com/register 
The register page is for the first time user to register their account. User needs to choose the user type: admin, student, professor, then type their basic info to register.  

#####Top Courses: https://cs5610-project-xiaoshuang.herokuapp.com/topcourses 
User can view top courses without login. The page shows courses and their average rating, which can help student to register new course for the following semester.  

#####Admin dashboard: https://cs5610-project-xiaoshuang.herokuapp.com/admin 
In this page, admin have several buttons. These buttons can direct admin to 'edit professors', 'edit students', 'edit personal info', and 'logout' respectively.  Edit personal info will direct admin to (******edit personal info link: https://cs5610-project-xiaoshuang.herokuapp.com/admin/edit) to edit admin's info.

#####Edit professor: https://cs5610-project-xiaoshuang.herokuapp.com/admin/professor  
This page will list all professor users info. Admin is able to edit professor's info, delete this user, or add a new professor(*******add new professor link: https://cs5610-project-xiaoshuang.herokuapp.com/admin/professor/new)

#####Edit students: https://cs5610-project-xiaoshuang.herokuapp.com/admin/student 
This page will list all student users info. Admin is able to edit student's info, delete this user, or add a new student (*******add new student link: https://cs5610-project-xiaoshuang.herokuapp.com/admin/student/new)  

#####Professor dashboard: https://cs5610-project-xiaoshuang.herokuapp.com/professor
Professor has buttons that can direct professor to his/her course list, add new course page, or logout  

#####Professor course list: https://cs5610-project-xiaoshuang.herokuapp.com/professor/courses
This page lists professor's all courses. It also allows them to add new course (https://cs5610-project-xiaoshuang.herokuapp.com/professor/courses/new). Professor can edit course (https://cs5610-project-xiaoshuang.herokuapp.com/professor/courses/:courseId). 

#####Widget list: https://cs5610-project-xiaoshuang.herokuapp.com/professor/courses/:courseId/widget 
Professor can add/edit header, image, youtube, html to his course to describe the course vividly.  

#####Student dashboard: https://cs5610-project-xiaoshuang.herokuapp.com/student 
Student has buttons that can direct to his/her course list, add new course page, or logout.  

#####Student course list: https://cs5610-project-xiaoshuang.herokuapp.com/student/courses 
This page lists student's all courses. It also allows them to add new course. Student can rate course. (**** rating link: https://cs5610-project-xiaoshuang.herokuapp.com/student/courses/:courseId)  

#####Widget list: https://cs5610-project-xiaoshuang.herokuapp.com/student/courses/:courseId/widget  
Student can only view the course's widget list, i.e. course website.  


###Guidence on Using This Application
#####View Assignment:
View our assignment through the left bottom corner link in the homepage.  

##### View top courses:  
View top courses through the right top corner link in the homepage  
 
#####Login/Register:   
Using existing user to login or register a new user from the right top corner in the homepage. Using existing admin username and password to login as admin.  

##### Edit User:  
Admin can choose edit admin or student or professor's profile in admin's dashboard.  
It will jump to a new page when you edit your personal info. All the information will be updated after you click the 'update' button. You can also delete yourself.  
When you choose edit students/professors, a new page will show all the user's info. There will be a window poped up after you click 'edit' button. All the changes will be saved when you click 'save changes', at the same time, the edit window will be closed, and you will see the changes in the current page. You can also delete users.  

##### Add Course:  
As a professor or student, add your courses through the button in your dashboard after your login.  

##### Edit Course:
Professor has the edit button in your course list page. Clike 'edit' to edit course info.  

##### Delete Course:
Professor and Student can delete their courses in course list page. When professor delete a course, the course will also be deleted from the student's course list if the student added this course before.

##### Rate Course:
Student can see rate course option in his/her course list page. In the rating page, student can use slide bar to rate this course.

##### Add Widget:  
Professor can add widget by clicking the course name in the course list page. It will directs you to the widget list page. Clicking '+' button in the right top corner, the next page asks you to choose a widget type, then direct you to the corresponding widget type creating page. After you create the widget, it will show in the widget list page.  

##### View Widget
Professor and student can view course widget by clicking the course name in their course list page.

##### Image Widget:  
Image widget allows professor to upload a image vy upload button. Professor can also choose from flickr. Clicking update button to upload page from flickr. 
