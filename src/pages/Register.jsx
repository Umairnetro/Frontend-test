import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    email: '',
    name: '',
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>CNIC</label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleInputChange}
              required
              placeholder="Enter your CNIC number"
              pattern="[0-9]{13}"
              title="Please enter a valid 13-digit CNIC number"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your Password"
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
