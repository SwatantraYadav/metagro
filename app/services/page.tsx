import React from 'react';
import { IconType } from 'react-icons';
import { FaTractor, FaLeaf, FaChartLine, FaWarehouse, FaTruck, FaRobot } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
    <div className="text-4xl text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaTractor />,
      title: "Smart Farming Solutions",
      description: "Implement IoT sensors and AI-driven analytics to optimize crop management and resource utilization."
    },
    {
      icon: <FaLeaf />,
      title: "Precision Agriculture",
      description: "Utilize data-driven insights for precise application of water, fertilizers, and pesticides to maximize yield and sustainability."
    },
    {
      icon: <FaChartLine />,
      title: "Market Intelligence",
      description: "Access real-time market data and predictive analytics to make informed decisions on crop selection and pricing."
    },
    {
      icon: <FaWarehouse />,
      title: "Supply Chain Management",
      description: "Streamline your agricultural supply chain with our advanced tracking and logistics solutions."
    },
    {
      icon: <FaTruck />,
      title: "Distribution Network",
      description: "Connect with our vast network of buyers and sellers to expand your market reach and optimize sales."
    },
    {
      icon: <FaRobot />,
      title: "Automated Machinery",
      description: "Integrate cutting-edge automated machinery to increase efficiency and reduce labor costs in farming operations."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Empowering agriculture with innovative technology and data-driven solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Metagro?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cutting-edge technology integration</li>
            <li>Comprehensive farm-to-table solutions</li>
            <li>Data-driven decision making</li>
            <li>Sustainable and eco-friendly practices</li>
            <li>Expert support and consultation</li>
            <li>Tailored solutions for farms of all sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
