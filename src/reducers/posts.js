import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const PostsReducer = (state = [], action) => {
  const {
    id, title, img, description, type,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, img, description,
      }]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post, img, title, description,
          }
        }
        return post
      })
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default PostsReducer
