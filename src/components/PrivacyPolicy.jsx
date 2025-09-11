import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section id="pricing-plans" className="lg">
        <div className="main-container bg-light">
          <div className="container bg-light">
            <p>
              At MenuMitra, accessible from <strong><a href='https://menumitra.com/' target='_blank' rel="noreferrer">www.menumitra.com</a></strong>, one of our main priorities is the privacy of our visitors and users. This Privacy Policy document contains
              types of information that is collected and recorded by MenuMitra and how we use it.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We collect information directly from you and automatically as you navigate through our services. We do not collect data from third-party sources. The types of personal data we may collect include:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information when you register or make a payment.</li>
              <li><strong>Hotel & Business Data:</strong> Information related to your hotel operations, such as menu items, pricing, and inventory data.</li>
              <li><strong>Usage Data:</strong> Details of your interactions with our services, including access dates and times, pages viewed, and transaction details.</li>
            </ul>

            <h3 className='mt-3'>1.1 Device Permissions & Technologies</h3>
            <p>
              MenuMitra mobile apps request access to specific device features to support core restaurant operations:
            </p>
            <ul>
              <li><strong>Bluetooth & Location Access:</strong> Required for communication between staff devices (e.g., Waiter to Kitchen) using BLE. Location permission is needed by Android for Bluetooth functionality.</li>
              <li><strong>Notifications & Vibration:</strong> To alert staff of new orders, updates, and system actions.</li>
              <li><strong>Media & Storage Access:</strong> To store and access digital receipts, app assets, and cached content.</li>
              <li><strong>Background Services:</strong> Some apps use services like “receive boot completed” to resume operations after device restarts.</li>
            </ul>

            <h3 className='mt-3'>2. How We Use Your Information</h3>
            <p>MenuMitra uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our services.</li>
              <li>To notify you about changes to our services.</li>
              <li>To allow you to participate in interactive features when you choose to do so.</li>
              <li>To provide customer support and respond to your inquiries.</li>
              <li>To analyze usage and improve our services.</li>
              <li>To process payments and ensure secure transactions.</li>
              <li>To send you marketing communications if you have opted to receive them.</li>
            </ul>

            <h3 className='mt-3'>3. Data Sharing and Disclosure</h3>
            <p>We may share your personal data with:</p>
            <ul>
              <li><strong>Service Providers:</strong> To perform functions and process user data on our behalf, such as payment processing and data analytics.</li>
              <li><strong>Business Partners:</strong> With trusted partners for marketing and promotional purposes, subject to your consent.</li>
              <li><strong>Legal Requirements:</strong> To comply with a legal obligation or protect and defend our rights and property.</li>
            </ul>

            <h3 className='mt-3'>4. Data Security</h3>
            <p>
              We take appropriate measures to ensure the security of your data, but please note that no method of transmission over the Internet or electronic storage is completely secure. We strive to use commercially acceptable means to protect your personal information.
            </p>

            <h3 className='mt-3'>4.1 Role-Based Access Control</h3>
            <p>
              MenuMitra applications are built for different restaurant roles such as Owner, Waiter, Captain, and Partner. Access to data and features is role-specific and protected by secure login credentials. Sensitive operations like billing or analytics are only accessible by authorized roles.
            </p>

            <h3 className='mt-3'>4.2 Offline Data Usage</h3>
            <p>
              To ensure smooth operation even without an internet connection, some apps store data locally using encrypted on-device databases. Data syncs securely with our server once a connection is available.
            </p>

            <h3 className='mt-3'>5. Your Privacy Rights</h3>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access and update your personal information.</li>
              <li>Request the deletion of your data.</li>
              <li>Opt out of receiving marketing communications.</li>
              <li>Restrict or object to our use of your personal information.</li>
            </ul>

            <h3 className='mt-3'>6. Third-Party Services</h3>
            <p>
              Our website and app may contain links to third-party websites or services. MenuMitra is not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
            <p>
              MenuMitra also uses services like <strong>Expo Notifications</strong> and <strong>Bluetooth Low Energy (BLE)</strong> for background communication and alerts. These services help improve app functionality without collecting personal user data.
            </p>

            <h3 className='mt-3'>7. Children’s Privacy</h3>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If we discover that a child under 13 has provided us with personal data, we will take steps to delete such information.
            </p>

            <h3 className='mt-3'>8. Updates to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. The changes are effective immediately after they are posted.
            </p>

            <h3>9. Contact Us</h3>
            <p>If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> <a href="mailto:info@menumitra.com">info@menumitra.com</a></p>

            <p className="mt-4">
              By using our services, you consent to the terms of this Privacy Policy. Thank you for trusting MenuMitra with your data.
            </p>
          </div>
        </div>
      </section>
      <Form />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
