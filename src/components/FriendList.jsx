import React, { Component } from "react";

class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="friends-list">
        <div className="header">Freinds</div>
        <div className="friends-item">
          {friends.length ? (
            friends.map((friend) => <p>{friend.name}</p>)
          ) : (
            <p>Connect with People</p>
          )}
        </div>
      </div>
    );
  }
}

export default FriendList;
