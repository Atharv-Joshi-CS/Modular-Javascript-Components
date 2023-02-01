# Title: Modular JavaScript Components

### This task will combine your knowledge of JavaScript modules  and classes.


A big application is a collection of smaller components. Each component comes with its own code and business logic.

Combined together they can be used to create a big application.
In your task you have to extend the logic for Counter and Timer application.
Each of these applications will be created as a standalone class component. The module will export a class that can be used to generate these individual components. Example: "Counter.js" will export "Counter" class that can be used to create a counter component.
### Task is divided into 3 parts

- Delete the code created in the demo session and repeat the process till you feel comfortable with reproducing different parts of the code. By now you should be able to
Write ES5 functions.

- Create a class
- Write business logic with clean coding structure.
- Counter component should be reusable.
- If there are multiple instances of the counter on the DOM, each counter should operate independently.
- Data from one counter should not interfere with the data or functioning of other counter.
- Once an instance of a Counter is mounted on DOM, it cannot be mounted again. i.e. counter.mount( ) even if it is called multiple times, should create a single instance of Counter on DOM.
- Create a Timer Application
- This timer application should have start, stop and reset functionality.
- Focus on keeping the coding logic clear and simple to follow. Avoid multiple or nested if statements, it makes it difficult to debug and extend the code.
- Different instances of the Timer Class should function independently of each other.
- This should clear your understanding of Classes and instances of components. The logic will help you work better with React components.


<img width="959" alt="image" src="https://user-images.githubusercontent.com/123962636/216062719-58b6e7ff-4e5b-4845-8784-dfd567145b51.png">
