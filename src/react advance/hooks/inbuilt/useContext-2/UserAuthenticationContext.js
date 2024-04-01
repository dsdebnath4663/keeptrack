import React from "react";
import { AuthProvider } from "./AuthContext";
import UserProfile from "./UserProfile";

const UserAuthenticationContext = () => {
  return (
    <AuthProvider>
      <div>
        <h1>User Authentication Context Example</h1>
        <UserProfile />
      </div>
    </AuthProvider>
  );
};

export default UserAuthenticationContext;
