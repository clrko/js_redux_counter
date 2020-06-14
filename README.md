# js_redux_counter
This reposotiry contains an exercice to learn redux (without React)

## To view the counter in action

* `open index.html` in CLI
* [CodePen](https://codepen.io/clrko/pen/BajzxjV?editors=1011)


## Main information

### The index.html file contains :

* [Redux CDN](https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js)
* 5 buttons corrsponding to different increment, decrement and reset situations
* link to the main.js script

### The main.js file in organized into sections to clarify the code: 

* Actions :section that gathers the different actions that can be executed
* Reducer: counterReducer pure function that takes for argument the initial state and the action, and returns the new state of the counter
* Store: an object that holds the application state and allows state to be updated via the dispatch method
* Main: section that gather the addEventListerner() methods that trigger the update of the state when a button is clicked
