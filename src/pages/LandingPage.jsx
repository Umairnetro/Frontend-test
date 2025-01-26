import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const loanCategories = [
    {
      title: 'Wedding Loans',
      maxAmount: '5 Lakh',
      period: '3 years',
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
    },
    {
      title: 'Home Construction Loans',
      maxAmount: '10 Lakh',
      period: '5 years',
      subcategories: ['Structure', 'Finishing', 'Loan'],
    },
    {
      title: 'Business Startup Loans',
      maxAmount: '10 Lakh',
      period: '5 years',
      subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
    },
    {
      title: 'Education Loans',
      maxAmount: 'Based on requirement',
      period: '4 years',
      subcategories: ['University Fees', 'Child Fees Loan'],
    },
  ];

  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Saylani Qarze Hasana Program</h1>
        <p>Interest-free loans to support your needs</p>
        <Link to="/calculator" className="cta-button">
          Calculate Your Loan
        </Link>
      </header>

      <section className="loan-categories">
        <h2>Available Loan Categories</h2>
        <div className="categories-grid">
          {loanCategories.map((category, index) => (
            <div key={index} className="category-card">
              <h3>{category.title}</h3>
              <div className="category-details">
                <p><strong>Maximum Amount:</strong> {category.maxAmount}</p>
                <p><strong>Loan Period:</strong> {category.period}</p>
              </div>
              <div className="subcategories">
                <h4>Subcategories:</h4>
                <ul>
                  {category.subcategories.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              </div>
              <Link to="/calculator" className="apply-button">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
