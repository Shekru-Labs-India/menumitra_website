import React from 'react';

const FeatureSection = () => {
  return (
    <div id="features" className="mt-80">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-50">
            MenuMitra is more than just a billing software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
              <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Online Orders</h5>
              <p style={{ color: '#666' }} className="feature-description">Receive online orders, handle your digital menu, indicate when food is ready, process payments, and track revenue—all in one place without switching between multiple screens.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
              <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Management</h5>
              <p style={{ color: '#666' }} className="feature-description">Personalize your restaurant menu to make it better for customers. Add exciting extras, special offers, unique menus, and dynamic pricing options.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
              <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Inventory Management</h5>
              <p style={{ color: '#666' }} className="feature-description">Smartly manage your inventory with instant low-stock alerts, item-wise auto-deduct, create daily closing reports and much more</p>
            </div>
            <div className="col-md-4 mb-4">
              <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
              <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Reports & Analytics</h5>
              <p style={{ color: '#666' }} className="feature-description">Receive instant reports on your owner's app & WhatsApp for day-end sales, inventory, staff activities, and other vital business insights.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
              <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Customer Engagement</h5>
              <p style={{ color: '#666' }} className="feature-description">MenuMitra's CRM enables you to monitor, handle, and reward loyal customers, ensuring that your brand forms a unique connection with each customer.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-users feature-icon"></i>
              <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Staff Management</h5>
              <p style={{ color: '#666' }} className="feature-description">Efficiently manage your restaurant staff with role-based access control, attendance tracking, performance monitoring, and streamlined communication tools.</p>
            </div>
          </div>
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>
  );
};

export default FeatureSection;
