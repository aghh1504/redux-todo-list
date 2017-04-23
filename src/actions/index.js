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
