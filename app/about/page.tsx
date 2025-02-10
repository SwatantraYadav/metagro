import Card from '../components/card/card';
import Image from 'next/image';

const About = () => {
  const teamMembers = [
    { 
      name: "Priyank Yadav", 
      role: "Founder & Director of Digital Transformation", 
      imageUrl: "/images/priyank.jpg",
      description: "Master's in Management from MNNIT Allahabad with 24 years of communications and ICT experience. Led projects in SMART cities, APDRP, and digital  initiatives for Education and UP Police. Expertise in ICT strategy, new business rollouts, and digital transformation. Over 15 years in leadership roles at Tata, Reliance Jio, and RCL."
    },
    { 
      name: "Sujeet Singh", 
      role: "Head of Business Development & Finance", 
      imageUrl: "/images/sujit.jpg",
      description: "MSME Lending & Business Development expert with more than 2 decades of experience in top banks in Financial Services Co. An effective planner, a strong leader, strategist, with ability to see big picture, set goals and lead successful execution through excellent team management & problem-solving skills with Serenity."
    },
    { 
      name: "Mayank Singh", 
      role: "Head of Government Policy, Strategist", 
      imageUrl: "/images/mayank.jpg",
      description: "Specializes in Agri Project Management & Govt. Relations. Deep understanding of key sectors such as Environment, Urban & Rural Infrastructure and International Market & Regulations. Have rich overseas experience of Agri-Project Management in UAE & Africa."
    },
    { 
      name: "Shivani Singh", 
      role: "Founder & Head of Marketing", 
      imageUrl: "/images/shivani.jpg",
      description: "Marketing professional specializing in agricultural product promotion and brand development."
    },
    { 
      name: "Madhavi Singh", 
      role: "Founder & Head of HR", 
      imageUrl: "/images/madhavi.jpg",
      description: "Human resources expert focusing on talent acquisition and team development."
    }
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
              subDescription={member.description}
            />
          ))}
        </div>

        {/* Rest of the code remains the same */}
      </div>
    </div>
  );
};

export default About;
