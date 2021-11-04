import { combineReducers } from 'redux'

import BioReducer from './bio'
import PostsReducer from './posts'

export default combineReducers({
  bio: BioReducer,
  posts: PostsReducer,
})
