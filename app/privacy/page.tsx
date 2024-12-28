import React from 'react';
import Image from 'next/image';

const Privacy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
        At MetaAgro, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Information Collection</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We collect information about you when you visit our website, use our services, or interact with us through other means. This may include personal details, contact information, and usage data.</li>
              <li>The information we collect is used to provide and improve our services, communicate with you, and personalize your experience. We may also use it for marketing purposes, with your consent.</li>
              <li>We do not share your personal information with third parties except as described in this policy. We may share information with trusted partners to provide services on our behalf, but only if they agree to keep this information confidential.</li>
              <li>We may update this Privacy Policy from time to time. We will notify you of any significant changes and encourage you to review the policy periodically.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Security</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is completely secure.</li>
              <li>You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications and request that we stop processing your data.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            For more information about our Privacy Policy or to request a copy, please{' '}
            <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
