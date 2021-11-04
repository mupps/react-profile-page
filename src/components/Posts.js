import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import PostsForm from './PostsForm'
import { addPost, editPost, deletePost } from '../actions'

const Post = ({
  id, title, img, description, dispatchEditPost, dispatchDeletePost
}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="col-3">
      {!isEditing && (
        <div className="card">
          <img className="card-img-top" src={img} alt="Image display error" />
          <div className="card-body">
            <h4 className="card-title">
              Post #
              {id}
              :
              { title }
            </h4>
            <p className="card-text">
              { description }
            </p>
            <button className="btn btn-info" type="button" onClick={() => setIsEditing(!isEditing)}> Edit Post </button>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="card">
          <div className="card-body">
            <PostsForm
              id={id}
              title={title}
              img={img}
              description={description}
              changeInfo={dispatchEditPost}
              setIsEditing={setIsEditing}
            />
            <div>
              <button className="btn btn-danger" type="button" onClick={() => dispatchDeletePost(id)} style={{ marginTop: '1rem', width: '100%' }}> DELETE POST </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const Title = s.h1`
  color: BLUE;
  margin-bottom: 3rem;
  font-family: "Lucida Console", "Courier New", monospace;
`

const Wrapper = s.div`
  padding: 3rem 10rem;
`
const Modal = ({
  dispatchAddPost,
}) => (
  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">New Blog Post</h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <PostsForm title="" img="" description="" changeInfo={dispatchAddPost} />
        </div>
      </div>
    </div>
  </div>
)

const Posts = ({
  posts, dispatchAddPost, dispatchEditPost, dispatchDeletePost,
}) => (
  <Wrapper>
    <Title>
      Blog Posts
    </Title>
    <button type="button" className="btn btn-dark float-right" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ marginBottom: '2rem' }}>
      Add Post
    </button>

    <Modal dispatchAddPost={dispatchAddPost} />

    <div className="row">
      {posts.map(post => <Post key={post.id} {...post} dispatchEditPost={dispatchEditPost} dispatchDeletePost={dispatchDeletePost} />)}
    </div>
  </Wrapper>
)

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, img, description) => dispatch(addPost(title, img, description)),
  dispatchEditPost: (id, title, img, description) => dispatch(editPost(id, title, img, description)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
