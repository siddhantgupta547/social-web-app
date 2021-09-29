import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { users, error } = this.props.auth;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error === false && (
          <div className="alert success-dailog">
            Successfully updated profile!
          </div>
        )}
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{users.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{users.name}</div>
        </div>

        <div className="btn-grp">
          <button
            className="button edit-btn"
            //onClick={() => this.handleChange("editMode", true)}
          >
            Add Friend
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Profile);
