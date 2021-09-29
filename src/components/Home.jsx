import React, { Component } from "react";

import PostsList from "./PostsList";
import FriendList from "./FriendList";

class Home extends Component {
  render() {
    // console.log("home", this.props.friends);
    const { friends } = this.props.friends;
    // console.log(friends.friends.length, "length");
    return (
      <div className="home">
        <PostsList posts={this.props.posts} />
        {this.props.isLoggedIn && <FriendList friends={friends} />}
      </div>
    );
  }
}

export default Home;
