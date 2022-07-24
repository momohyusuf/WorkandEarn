import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/forms/Buttons/Button';
import TextField from '../../components/forms/TextField/TextField';
import Select from '../../components/forms/Select/Select';

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    number: '',
    location: '',
    sendEmails: true,
    agreement: false,
  });

  const handleInputs = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  // function validate(InputEmail) {
  //   if (InputEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  return (
    <>
      <Navbar />
      <section className="form--section">
        <form>
          <TextField
            handleInputs={handleInputs}
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
          />
          <TextField
            handleInputs={handleInputs}
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
          />
          <TextField
            handleInputs={handleInputs}
            type="password"
            name="password"
            value={formData.password}
            placeholder="Create password"
          />
          <TextField
            handleInputs={handleInputs}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Comfirm Password"
          />
          <TextField
            handleInputs={handleInputs}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
          />
          <TextField
            handleInputs={handleInputs}
            type="number"
            name="number"
            value={formData.number}
            placeholder="Number"
          />
          <Select
            value={formData.location}
            id="location"
            name="location"
            handleInputs={handleInputs}
          />
          <br />

          <label className="checkbox--container" htmlFor="sendEmails">
            <input
              type="checkbox"
              onChange={handleInputs}
              name="sendEmails"
              id="sendEmails"
              checked={formData.sendEmails}
            />
            <span className="checkmark"></span>
            Send me helpful emails to find rewarding work and job leads.
          </label>
          <br />

          <label htmlFor="agreement" className="checkbox--container">
            <input
              type="checkbox"
              onChange={handleInputs}
              name="agreement"
              id="agreement"
              checked={formData.agreement}
            />
            <span className="checkmark"></span>
            Yes, I understand and agree to WnE Terms of Service, including the
            User Agreement and Privacy Policy .
          </label>
          <br />

          <Button
            className="btn--small btn-primary"
            value="Create Account"
            width="100%"
          />
        </form>
      </section>
    </>
  );
}

export default SignupPage;
