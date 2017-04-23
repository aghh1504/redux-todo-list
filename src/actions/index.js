export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const onChange = (value) => {
  return {
    type: 'CHANGE',
    value
  }
}

export const onSubmit = (e) => {
  return {
    type: 'SUBMIT',
    e
  }
}
export const toggle = (text) => {
  return {
    type: 'TOGGLE',
    text
  }
}
export const allItems = () => {
  return {
    type: 'ALL_ITEMS'
  }
}
export const checkedItems = () => {
  console.log(`action checkedItems`)
  return {
    type: 'CHECKED_ITEMS'
  }
}
export const UnCheckedItems = () => {
  return {
    type: 'UNCHECKED_ITEMS'
  }
}
