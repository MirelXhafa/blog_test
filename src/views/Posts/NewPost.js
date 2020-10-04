import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { createPostAction } from "../../redux/actions/posts";

function NewPost() {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-md-12 py-3 border-bottom mb-3">
        <h4>Create new post</h4>
      </div>
      <div className="col-md-12">
        <Formik
          initialValues={{
            title: "",
            imageUrl: "",
            videoUrl: "",
            description: "",
          }}
          onSubmit={(values) => {
            dispatch(createPostAction(values));
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
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Image url</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Video url</label>
                <input
                  type="text"
                  className="form-control"
                  name="videoUrl"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="desciption"
                  className="form-control"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-success">Create post</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewPost;
