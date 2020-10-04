import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import EditPost from "../views/Posts/EditPost";
import NewPost from "../views/Posts/NewPost";
import Post from "../views/Posts/Post";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/new-post" exact>
        <NewPost />
      </Route>
      <Route path="/edit-post/:id" exact>
        <EditPost />
      </Route>
      <Route path="/post/:id" exact>
        <Post />
      </Route>
    </Switch>
  );
}

export default Routes;
