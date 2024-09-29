import Card from '../components/card/card';
import Image from 'next/image';

const About = () => {
  const teamMembers = [
    { name: "Priyank Yadav", role: "Founder & CEO", imageUrl: "/images/priyank.jpg" },
    { name: "Sujit Singh", role: "Founder & Partner", imageUrl: "/images/sujit.jpg" },
    { name: "Mayank Singh", role: "Founder, Partner & Strategist", imageUrl: "/images/mayank.jpg" },
    { name: "Shivani Singh", role: "Founder & Head of Marketing", imageUrl: "/images/shivani.jpg" },
    { name: "Madhavi Singh", role: "Founder &Head of HR", imageUrl: "/images/madhavi.jpg" },
    { name: "Swaraj Yadav", role: "CTO", imageUrl: "/images/swaraj.jpg" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Team</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              title={member.name}
              description={member.role}
              imageUrl={member.imageUrl}
              altText={`${member.name} - ${member.role}`}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Metagro</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Metagro is at the forefront of agricultural innovation, combining cutting-edge technology with traditional farming practices. Our mission is to revolutionize the agricultural industry by providing smart, sustainable solutions that benefit farmers, consumers, and the environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded by a team of passionate experts in agriculture and technology, we're committed to addressing the challenges faced by modern farming. Through our AI-driven tools and comprehensive supply chain management, we're creating a more efficient, productive, and sustainable future for agriculture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
