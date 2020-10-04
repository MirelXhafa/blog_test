import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../redux/selectors/post";
import { editPostAction, getPostAction } from "../../redux/actions/posts";
import { Formik } from "formik";

function EditPost() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const selectPost = useSelector((state) => post(state));

  useEffect(() => {
    dispatch(getPostAction(id));
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 py-3 border-bottom mb-3">
        <h4>Edit {selectPost.title}</h4>
      </div>
      <div className="col-md-12">
        <Formik
          initialValues={selectPost}
          onSubmit={(values) => {
            dispatch(editPostAction(values));
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  value={values.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Video url</label>
                <input
                  type="text"
                  className="form-control"
                  name="videoUrl"
                  value={values.videoUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-success">Edit post</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditPost;
