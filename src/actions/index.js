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

export const onSubmit = (e, id) => {
  return {
    type: 'SUBMIT',
    e,
    id

  }
}
export const toggle = (id) => {
  return {
    type: 'TOGGLE',
    id

  }
}
