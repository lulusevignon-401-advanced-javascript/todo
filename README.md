# TODO 

A Web Application for securely managing a To Do List

## Start the App
- Clone down api-server-todo 
    - https://github.com/luluse/api-server-todo
    - add .env file with PORT and MONGODB_URI
    - Turn on server
- Clone down this repo
    - add .env file with REACT_APP_API and REACT_APP_SECRET
    - run npm start on Todo React app

## Phase 1: 

- As a user, I would like an easy way to add a new to do item using an online interface
- As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
- As a user, I would like to delete to do items that are no longer needed
- As a user, I would like to easily mark to do items as completed
- As a user, I would like to edit an existing to do item

## Phase 2: 
- As a user, I would like to be able to add, update, and delete To Do items
- As a user, I would like my To Do Items to be permanently stored so that I can re-access them at any time, using any device

## Phase 3:

- As a user, I would like to see my To Do List Items a few at a time so that I don’t have to wade through them all
- As a user, I would like my default view to only be “Incomplete” Items so that I can quickly determine what I have to do.
- As a user, I would like my list sorted by difficulty so that I can more easily prioritize
As a user, I would like the option to change my default preferences with regards to how many Items I see per page, which items are filtered, and how they are sorted

## Phase 4 :

- As a user, I want to provide a way for other users to create new accounts
- As a user, I want to provide a way for all users to login to their account
- As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
- As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
- As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

## Technical Requirements

- React
- ES6 Classes
- Settings delivered to the application using Context
- User Login & Permissions delivered to the application using Context
- Local Storage for storing login status
- Local Storage for storing user preferences
- Superagent and Axios for performing API Requests
- React Bootstrap for styling


## UML
![TODO uml](./assets/uml.png)