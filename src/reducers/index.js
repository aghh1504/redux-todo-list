import {combineReducers} from 'redux'

  const INIT_STATE = {
    value: '',
    arr: [ {
      id: 0,
      text: 'Learn Redux!',
      checked: false
    }
    ]
  }

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    }
      return state;
}

const toDo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value.target.value
      }
    case 'SUBMIT':
      action.e.preventDefault()
      return {
        ...state,
        arr: [...state.arr,
              {id: action.id, text: state.value, checked:false},
            ],
        value: ''
      }
    case 'TOGGLE':
    return {
        ...state,
        arr: state.arr.map(item => {
          if (action.id !== item.id) return item;
          return {
            ...item,
            checked: !item.checked,
          };
        })
      }
  }
    return state;
}

const reducers = combineReducers({
  counter,
  toDo
})

export default reducers;
