import React from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Loan Applications</h3>
          <p>Review and manage loan applications</p>
          {/* Add loan applications management here */}
        </div>
        <div className="dashboard-card">
          <h3>User Management</h3>
          <p>Manage user accounts and permissions</p>
          {/* Add user management here */}
        </div>
        <div className="dashboard-card">
          <h3>Appointments</h3>
          <p>View and manage user appointments</p>
          {/* Add appointment management here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
