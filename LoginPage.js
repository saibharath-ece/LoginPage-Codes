import React from 'react';

function LoginPage() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
