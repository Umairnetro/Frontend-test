import React, { useState } from 'react';
import './LoanRequest.css';

const LoanRequest = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    address: '',
    phoneNumber: '',
    
    // Guarantor 1
    guarantor1Name: '',
    guarantor1Email: '',
    guarantor1Location: '',
    guarantor1CNIC: '',
    
    // Guarantor 2
    guarantor2Name: '',
    guarantor2Email: '',
    guarantor2Location: '',
    guarantor2CNIC: '',
    
    // Optional Documents
    salaryStatement: null,
    otherDocuments: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement loan request submission logic
    console.log('Loan request submitted:', formData);
  };

  return (
    <div className="loan-request-container">
      <div className="loan-request-card">
        <h2>Loan Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your complete address"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="section">
            <h3>First Guarantor</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="guarantor1Name"
                value={formData.guarantor1Name}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="guarantor1Email"
                value={formData.guarantor1Email}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's email"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="guarantor1Location"
                value={formData.guarantor1Location}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's location"
              />
            </div>
            <div className="form-group">
              <label>CNIC</label>
              <input
                type="text"
                name="guarantor1CNIC"
                value={formData.guarantor1CNIC}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's CNIC"
                pattern="[0-9]{13}"
              />
            </div>
          </div>

          <div className="section">
            <h3>Second Guarantor</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="guarantor2Name"
                value={formData.guarantor2Name}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="guarantor2Email"
                value={formData.guarantor2Email}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's email"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="guarantor2Location"
                value={formData.guarantor2Location}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's location"
              />
            </div>
            <div className="form-group">
              <label>CNIC</label>
              <input
                type="text"
                name="guarantor2CNIC"
                value={formData.guarantor2CNIC}
                onChange={handleInputChange}
                required
                placeholder="Enter guarantor's CNIC"
                pattern="[0-9]{13}"
              />
            </div>
          </div>

          <div className="section">
            <h3>Additional Documents</h3>
            <div className="form-group">
              <label>Salary Statement (Optional)</label>
              <input
                type="file"
                name="salaryStatement"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </div>
            <div className="form-group">
              <label>Other Supporting Documents (Optional)</label>
              <input
                type="file"
                name="otherDocuments"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Loan Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequest;
