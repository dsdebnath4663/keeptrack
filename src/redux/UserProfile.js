import React from "react";
import { connect } from "react-redux";
import { setUsername } from "./actions/userActions";

const UserProfile = ({ username, setUsername }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username,
});

const mapDispatchToProps = {
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
