import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsAction } from "../../redux/actions/posts";
import { postsList } from "../../redux/selectors/post";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function Home() {
  const dispatch = useDispatch();

  const list = useSelector((state) => postsList(state));

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <div className="row">
      {list.length > 0 ? (
        list.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="card mb-5">
              <div className="card-header d-flex justify-content-end">
                <Link to={`/edit-post/${item.id}`}>Edit</Link>
                <Link
                  to={`/delete-post/${item.id}`}
                  className="text-danger ml-3"
                >
                  Delete
                </Link>
              </div>
              <div className="card-image">
                <img src={item.imageUrl} alt={item.id} />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/post/${item.id}`}>{item.title}</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="d-flex flex-row justify-content-around">
                  <FacebookShareButton
                    url={`http://localhost:3000/post/${item.id}`}
                  >
                    <FacebookIcon size={20} />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`http://localhost:3000/post/${item.id}`}
                  >
                    <TwitterIcon size={20} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center">
          <h6>No posts found</h6>
        </div>
      )}
    </div>
  );
}

export default Home;
