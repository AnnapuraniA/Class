import React from 'react';
import './App.css'; // This line assumes you have styling in App.css or any stylesheet

// Individual pricing card component
const PricingCard = ({ title, price, features, disabledFeatures }) => (
  <div className="pricing-card">
    <h3>{title}</h3>
    <h4>{price}</h4>
    <ul>
      {features.map((feature, index) => (
        <li key={index} className="feature">
          ✔ {feature}
        </li>
      ))}
      {disabledFeatures.map((feature, index) => (
        <li key={index} className="disabled-feature">
          ✘ {feature}
        </li>
      ))}
    </ul>
    <button>BUTTON</button>
  </div>
);

const App = () => {
  // Data for the pricing cards
  const pricingData = [
    {
      title: 'FREE',
      price: '$0/month',
      features: ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access'],
      disabledFeatures: ['Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'],
      disabledFeatures: ['Monthly Status Reports'],
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      disabledFeatures: [],
    },
  ];

  return (
    <div className="blue-container">
      {pricingData.map((data, index) => (
        <PricingCard
          key={index}
          title={data.title}
          price={data.price}
          features={data.features}
          disabledFeatures={data.disabledFeatures}
        />
      ))}
    </div>
  );
};

export default App;
