
// ACTIONS
const addOneAction = {
   type: 'ADD_1',
};

const removeOneAction = {
   type: 'REMOVE_1',
};

const addTenAction = {
   type: 'ADD_10',
};

const removeTenAction = {
   type: 'REMOVE_10',
};

const resetAction = {
   type: 'RESET',
};

//REDUCER
const counterReducer = (state = 0, action) => {
   switch (action.type) {
       case 'ADD_1':
           return state + 1;
       case 'REMOVE_1':
           return state - 1;
       case 'ADD_10':
           return state + 10;
       case 'REMOVE_10':
           return state - 10;
       case 'RESET':
           return 0;
       default:
           return state;
   }
}

//STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

//MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
   renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const addOne = document.getElementById('addOne');
addOne.addEventListener('click', () => {
   store.dispatch(addOneAction)
});

const removeOne = document.getElementById('removeOne');
removeOne.addEventListener('click', () => {
   store.dispatch(removeOneAction)
});

const addTen = document.getElementById('addTen');
addTen.addEventListener('click', () => {
   store.dispatch(addTenAction)
});

const removeTen = document.getElementById('removeTen');
removeTen.addEventListener('click', () => {
   store.dispatch(removeTenAction)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
   store.dispatch(resetAction)
});

expect(counterReducer(0, {type: 'ADD 1'})).toEqual(1)
expect(counterReducer(1, {type: 'ADD 1'})).toEqual(2)
expect(counterReducer(2, {type: 'REMOVE 1'})).toEqual(1)
expect(counterReducer(1, {type: 'REMOVE 1'})).toEqual(0)
expect(counterReducer(0, {type: 'ADD 10'})).toEqual(10)
expect(counterReducer(10, {type: 'ADD 10'})).toEqual(20)
expect(counterReducer(20, {type: 'REMOVE 10'})).toEqual(10)
expect(counterReducer(10, {type: 'REMOVE 10'})).toEqual(0)
expect(counterReducer(12, {type: 'RESET'})).toEqual(0)

console.log('test passed')