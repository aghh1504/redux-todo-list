import {combineReducers} from 'redux'

//show: [all, checked, unchecked]
  const INIT_STATE = {
    show: 'all',
    value: '',
    arr: [ {
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
              { text: state.value, checked:false},
            ],
        value: ''
      }
    case 'TOGGLE':
    return {
        ...state,
        arr: state.arr.map(item => {
          if (action.text !== item.text) return item;
          return {
            ...item,
            checked: !item.checked,
          };
        })
      }
    case 'ALL_ITEMS':
      return {
        ...state,
        show: 'all'
      }
    case 'CHECKED_ITEMS':
      console.log(`reducer ${JSON.stringify({        ...state,
              arr: state.arr.filter(item => item.checked)})}`)
      return {
        ...state,
        show: 'checked'
      }
      case 'UNCHECKED_ITEMS':
        return {
          ...state,
          show: 'unchecked'
        }

  }
    return state;
}

const reducers = combineReducers({
  counter,
  toDo
})

export default reducers;
