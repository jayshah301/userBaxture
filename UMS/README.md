# UMS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


User Management Application
This section provides an overview of the application, stating that it's a user management system built with Angular.

Features
This section lists the key features of the application:

User-insert Component: This component handles adding or editing user records. It provides a form for users to input their information and includes validation for required fields, email format, and phone number format. It also checks if the entered email already exists.

User-List Component: This component displays a grid of all user records. It allows users to edit or delete user records.

Validation: The application checks whether a user already exists before adding a new user.

Data Passing: It uses a DataService to pass data between components, facilitating communication between them.

Styling: Basic styling is applied to the application using Bootstrap to make it visually appealing.

loadUsersFromLocalStorage(): Loads user data from the local storage if available.
getUserList(): Returns an observable stream of user data.
deleteUser(userId: any): Deletes a user with the specified ID.
generateUniqueUserID(): Generates a unique user ID.
addUser(user: any): Adds a new user to the data service.
updateUser(user: User): Updates an existing user's information.
saveUsersToLocalStorage(): Saves user data to the local storage.
getUserById(userId: string): User | undefined: Retrieves a user by their ID.
checkUserexist(useremail: string): Checks if a user with the specified email address already exists.