import React, { Component } from "react";

import PostsList from "./PostsList";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
