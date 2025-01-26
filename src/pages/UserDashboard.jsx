import React from 'react';
import './Dashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Loan Applications</h3>
          <p>View and track your loan applications</p>
          {/* Add loan applications list here */}
        </div>
        <div className="dashboard-card">
          <h3>Profile Information</h3>
          <p>Update your personal information</p>
          {/* Add profile information here */}
        </div>
        <div className="dashboard-card">
          <h3>Documents</h3>
          <p>Upload and manage your documents</p>
          {/* Add document management here */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
