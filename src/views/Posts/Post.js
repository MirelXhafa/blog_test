import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../../redux/actions/posts";
import { post } from "../../redux/selectors/post";
import { Formik } from "formik";
import { addCommentAction } from "../../redux/actions/comment";
import { comments } from "../../redux/selectors/comments";

function Post() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const selectPost = useSelector((state) => post(state));
  const selectComments = useSelector((state) => comments(state));
  useEffect(() => {
    dispatch(getPostAction(id));
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h2>{selectPost.title}</h2>
      </div>
      <div className="col-md-12">
        {selectPost.imageUrl ? (
          <div className="post-item-image pr-3">
            <img src={selectPost.imageUrl} alt={selectPost.title} />
          </div>
        ) : null}
        <p>{selectPost.description}</p>
      </div>
      <div className="col-md-12">
        <div className="py-3">
          <h3>Comments</h3>
          <div className="py-3">
            <h4>Post a comment</h4>
            <Formik
              initialValues={{ comment: "" }}
              onSubmit={(values) => {
                let data = {
                  postId: selectPost.id,
                  ...values,
                };
                dispatch(addCommentAction(data));
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <textarea
                      name="comment"
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success">Comment</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="py-3 bg-light mb-5">
          {selectComments.length > 0 ? (
            selectComments.map((comment) => {
              if (comment.postId === selectPost.id) {
                return (
                  <div className="media p-3 bg-dark text-light mb-3">
                    <div className="media-body">{comment.comment}</div>
                  </div>
                );
              }
            })
          ) : (
            <p>No comments</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
