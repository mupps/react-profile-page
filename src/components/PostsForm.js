import React, { useState } from 'react'

const PostsForm = ({
  id, title, img, description, changeInfo, setIsEditing,
}) => {
  const [titleInput, setTitle] = useState(title)
  const [imgInput, setImg] = useState(img)
  const [descriptionInput, setDescription] = useState(description)

  return (
    <>
      <div className="form-group">
        <label>Title:</label>
        <input
          className="form-control"
          onChange={e => setTitle(e.target.value)}
          value={titleInput}
          placeholder="Enter post title..."
        />
      </div>
      <div className="form-group">
        <label>Image:</label>
        <input
          className="form-control"
          onChange={e => setImg(e.target.value)}
          value={imgInput}
          placeholder="Enter image url..."
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          className="form-control"
          onChange={e => setDescription(e.target.value)}
          value={descriptionInput}
          placeholder="Enter a description..."
          style={{ marginBottom: '2rem' }}
        />
      </div>
      <button
        className="btn btn-success"
        data-bs-dismiss="modal"
        type="button"
        onClick={() => {
          if (id) {
            changeInfo(id, titleInput, imgInput, descriptionInput)
          } else {
            changeInfo(titleInput, imgInput, descriptionInput)
          }
          if (setIsEditing) {
            setIsEditing(false)
          }
        }}
      >
        Save
      </button>
      <button
        className="btn btn-dark"
        data-bs-dismiss="modal"
        type="button"
        onClick={() => {
          if (setIsEditing) {
            setIsEditing(false)
          }
        }}
        style={{ marginLeft: '1rem' }}
      >
        Cancel
      </button>
    </>
  )
}

export default PostsForm
