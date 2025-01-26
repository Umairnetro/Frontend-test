import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [loanDetails, setLoanDetails] = useState({
    category: '',
    subcategory: '',
    amount: '',
    initialDeposit: '',
    period: ''
  });

  const loanCategories = {
    'Wedding Loans': {
      maxAmount: 500000,
      period: 3,
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez']
    },
    'Home Construction Loans': {
      maxAmount: 1000000,
      period: 5,
      subcategories: ['Structure', 'Finishing', 'Loan']
    },
    'Business Startup Loans': {
      maxAmount: 1000000,
      period: 5,
      subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery']
    },
    'Education Loans': {
      maxAmount: 0, // Based on requirement
      period: 4,
      subcategories: ['University Fees', 'Child Fees Loan']
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateMonthlyPayment = () => {
    if (!loanDetails.amount || !loanDetails.period) return 0;
    const totalAmount = Number(loanDetails.amount) - Number(loanDetails.initialDeposit || 0);
    const months = Number(loanDetails.period) * 12;
    return (totalAmount / months).toFixed(2);
  };

  return (
    <div className="calculator-container">
      <h2>Loan Calculator</h2>
      <div className="calculator-form">
        <div className="form-group">
          <label>Loan Category</label>
          <select 
            name="category" 
            value={loanDetails.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {Object.keys(loanCategories).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {loanDetails.category && (
          <div className="form-group">
            <label>Subcategory</label>
            <select
              name="subcategory"
              value={loanDetails.subcategory}
              onChange={handleInputChange}
            >
              <option value="">Select Subcategory</option>
              {loanCategories[loanDetails.category].subcategories.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label>Loan Amount (PKR)</label>
          <input
            type="number"
            name="amount"
            value={loanDetails.amount}
            onChange={handleInputChange}
            placeholder="Enter loan amount"
            max={loanCategories[loanDetails.category]?.maxAmount || ''}
          />
        </div>

        <div className="form-group">
          <label>Initial Deposit (PKR)</label>
          <input
            type="number"
            name="initialDeposit"
            value={loanDetails.initialDeposit}
            onChange={handleInputChange}
            placeholder="Enter initial deposit"
          />
        </div>

        <div className="form-group">
          <label>Loan Period (Years)</label>
          <input
            type="number"
            name="period"
            value={loanDetails.period}
            onChange={handleInputChange}
            placeholder="Enter loan period"
            max={loanCategories[loanDetails.category]?.period || ''}
          />
        </div>

        {loanDetails.amount && loanDetails.period && (
          <div className="calculation-result">
            <h3>Monthly Payment</h3>
            <p className="amount">PKR {calculateMonthlyPayment()}</p>
            <small>*This is an estimate. Final terms will be determined upon approval.</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
