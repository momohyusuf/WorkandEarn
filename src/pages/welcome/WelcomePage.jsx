import React from 'react';
import Button from '../../components/forms/Buttons/Button';
import { BsTools } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

function WelcomePage() {
  return (
    <>
      <Navbar />{' '}
      <div className="welcome--page--section">
        <div>
          <header>
            <p>Welcome to Work and Earn</p>
          </header>
          <section className="btn-container">
            <Button
              className="btn--large btn-secondary"
              value="Hire for a service"
              width="100%"
              icon={
                <BsTools className="icon" style={{ marginLeft: '0.5em' }} />
              }
            />
            <Link to="signup">
              <Button
                className="btn--large btn-primary"
                value="I want to earn"
                width="100%"
                icon={<AiFillDollarCircle style={{ marginLeft: '0.5em' }} />}
              />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
