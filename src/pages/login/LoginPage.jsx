import React, { useState, useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import TextField from '../../components/forms/TextField/TextField';
import Button from '../../components/forms/Buttons/Button';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const showPassword = useRef();
  const style = {
    textAlign: 'center',
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log(formData);
  const toggleShowPassword = () => {
    if (showPassword.current.type === 'password') {
      showPassword.current.type = 'text';
    } else if (showPassword.current.type === 'text') {
      showPassword.current.type = 'password';
    }
  };
  return (
    <>
      <Navbar />
      <section className="form--section">
        <form>
          <Link style={style} to="/">
            <h1>WnE</h1>
          </Link>
          <TextField
            handleInputs={handleInputs}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
          />
          <input
            onChange={handleInputs}
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            ref={showPassword}
          />
          <label htmlFor="showPassword" className="checkbox--container">
            <input
              type="checkbox"
              name="showPassword"
              id="showPassword"
              onClick={toggleShowPassword}
            />
            <span className="checkmark"></span>
            Show password
          </label>
          <Button
            className="btn--small btn-primary"
            value="Login"
            width="100%"
          />
        </form>
      </section>
    </>
  );
}

export default LoginPage;
