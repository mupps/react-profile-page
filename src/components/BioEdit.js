import React, { useState } from 'react'

const BioEdit = ({
  img, description, editInfo, setIsEditing,
}) => {
  const [imgInput, setImg] = useState(img)
  const [descriptionInput, setDescription] = useState(description)

  return (
    <>
      <div className="form-group" style={{ marginBottom: '2rem' }}>
        <label>Image</label>
        <input
          className="form-control"
          placeholder="Enter image url"
          onChange={e => setImg(e.target.value)}
          value={imgInput}
        />
      </div>
      <div className="form-group" style={{ marginBottom: '2rem' }}>
        <label>Description</label>
        <input
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Descrption"
          onChange={e => setDescription(e.target.value)}
          value={descriptionInput}
        />
      </div>
      <button
        className="btn btn-success"
        type="button"
        onClick={() => {
          editInfo(imgInput, descriptionInput)
          setIsEditing(false)
        }}
      >
        Save
      </button>
      <button className="btn btn-danger" type="button" onClick={() => setIsEditing(false)} style={{ marginLeft: '1rem' }}>
        Cancel
      </button>
    </>
  )
}

export default BioEdit
