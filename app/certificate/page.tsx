import React from 'react';
import Image from 'next/image';

const Certification = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Certification</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Metagro is proud to be certified, ensuring the highest standards in our agricultural technology solutions.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certification Details</h2>
            <p className="text-gray-700 mb-4">
              Our certification demonstrates our commitment to quality, safety, and innovation in the agricultural technology sector. This certification validates our processes, technologies, and services, ensuring that we meet and exceed industry standards.
            </p>
          </div>

          <div className="relative w-full h-[600px] mb-8">
            <Image
              src="/images/certificate.png"
              alt="Metagro Certification"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">What This Means for Our Clients</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Assurance of high-quality services and products</li>
              <li>Compliance with industry regulations and standards</li>
              <li>Commitment to continuous improvement and innovation</li>
              <li>Enhanced trust and credibility in the agricultural technology market</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            For more information about our certification or to request a copy, please{' '}
            <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
