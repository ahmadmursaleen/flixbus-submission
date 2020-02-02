## FlixBus Frontend Challenge

This is the flixbus's frontend challenge implementations details.

Please test the implementation at the following link.

https://flixbus-5a7b4.firebaseapp.com/

To log in use the the following credentials.
<br>

username: user@flixbus.com
password: user12345

## Method

1. The frontend is hosted on Firebase with Firebase authentication.
2. It is an angular application based on the core ui theme.[https://coreui.io/angular/]
3. Some of the salient features of the front end implementation include services using Dependency Injections to resue business logic, admin guards to prevent views from non logged in users, using observables from the rxjs library to access the REST API with the http client module and lazy loading etc.
4. It has 25 unit tests implemented based on test driven development. For integration tetsing, following 5 integration tests are performed i.e. the web application should have a login panel. The web application should redirect to /login when trying to access the dashboard without being authenticated. The webapplication should successfully login if provided the proper credentials. The Dashboard should have a list of buses after successful login.The Dashboard should have a filter panel after successful login.
5. Unit testing is performed using the ng test command.
6. Integration testing is performed using the ng e2e command.

## Local Setup

1. Clone this repo using the git clone command.
2. Install dependancies using the npm install command.
3. Start the json-webserver using the commands.

<br>cd backend/
<br>json-server --watch db.json

4. Start the web application using the following command.

<br>ng serve --open
