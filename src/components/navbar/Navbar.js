import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>WnE</h1>
      </Link>
      <div>
        <Link to="/login">Login</Link>
        <Link className="signUp--tab" to="/signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
