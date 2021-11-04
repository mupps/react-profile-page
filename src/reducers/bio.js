import { EDIT_BIO } from '../actions'

const defaultState = {
  img: '',
  description: '',
}

const BioReducer = (state = defaultState, action) => {
  const { type, img, description } = action

  switch (type) {
    case EDIT_BIO:
      return { img, description }
    default:
      return state
  }
}

export default BioReducer
