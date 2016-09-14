import * as ActionsTypes from './actions'

const initialState = {
  show: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.TOGGLE_TEXT:
      return {
        show: !state.show
      }
    default:
      return state
  }
}

export default reducer
