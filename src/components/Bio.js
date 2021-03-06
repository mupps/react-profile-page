import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import BioEdit from './BioEdit'
import { editBio } from '../actions'

const Wrapper = s.div`
  padding: 2rem 10rem;
  background: GREY;
`

const Title = s.h1`
  margin-bottom: 3rem;
  font-family: "Lucida Console", "Courier New", monospace;
`

const Cards = s.div`
  padding: 0 10rem;
`

const Bio = ({ img, description, dispatchEditBio }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Wrapper>
      <Title>
        Welcome to your blog!
        {!isEditing && (
          <button
            type="button"
            className="btn btn-info float-right"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
        )}
      </Title>

      {!isEditing && (
        <Cards className="row">
          <div className="col-8">
            {img && <img className="img-thumbnail" src={img} alt="Profile pic not loaded." />}
          </div>
          <div className="col-4">
            <h3>
              {description}
            </h3>
          </div>
        </Cards>
      )}

      {isEditing
      && (
        <BioEdit
          img={img}
          description={description}
          editInfo={dispatchEditBio}
          setIsEditing={setIsEditing}
        />
      )}
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  img: state.bio.img,
  description: state.bio.description,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditBio: (img, description) => dispatch(editBio(img, description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Bio)
