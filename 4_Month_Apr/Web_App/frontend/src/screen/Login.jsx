import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>
          <a href="/Home">Login</a>
        </button>
        <p className="text-danger">
          Don't have an account? <a href="/Register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
