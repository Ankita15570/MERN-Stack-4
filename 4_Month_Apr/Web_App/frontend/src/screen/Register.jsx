import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button>Login</button>
      <p className="text-danger">
        Already have an account? <a href="/Register">Register</a>
      </p>
    </div>
  );
};

export default Register;
