import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/routes";
import { loading } from "./redux/selectors/loading";
import Spinner from "./components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const isLoading = useSelector((state) => loading(state));
  const loadFacebookSDK = () => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  useEffect(() => {
    loadFacebookSDK();
  }, []);
  return (
    <>
      <div id="fb-root"></div>
      {isLoading ? <Spinner /> : null}
      <Navbar />
      <div className="container px-5">
        {location.pathname !== "/new-post" ? (
          <div className="py-3 mb-3 border-bottom">
            <Link className="btn btn-success" to="/new-post">
              Create a new post
            </Link>
          </div>
        ) : null}

        <Routes />
      </div>
    </>
  );
}

export default App;
