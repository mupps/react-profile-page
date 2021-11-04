export const EDIT_BIO = 'EDIT_BIO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
let count = 0

export const editBio = (img, description) => ({
  type: EDIT_BIO,
  img,
  description,
})

export const addPost = (title, img, description) => ({
  type: ADD_POST,
  title,
  img,
  description,
  id: count += 1,
})

export const editPost = (id, title, img, description) => ({
  type: EDIT_POST,
  id,
  title,
  img,
  description,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})
