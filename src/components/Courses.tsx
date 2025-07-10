import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseModal from './CourseModal';

const courses = [
  {
    id: '1',
    title: 'Software Development',
    duration: '12 months',
    description: 'Master full-stack development with modern technologies including React, Node.js, Python, and databases. Build real-world applications and prepare for tech careers.',
    level: 'Beginner to Advanced',
    certification: 'Software Development Certificate + Portfolio Projects',
    features: [
      'Frontend development with React and JavaScript',
      'Backend development with Node.js and Python',
      'Database design and management',
      'Version control with Git',
      'Agile development methodologies',
      'Cloud deployment and DevOps basics'
    ],
    color: 'border-blue-500'
  },
  {
    id: '2',
    title: 'Cybersecurity',
    duration: '8 months',
    description: 'Learn to protect digital assets and systems from cyber threats. Cover network security, ethical hacking, and risk management.',
    level: 'Intermediate',
    certification: 'Cybersecurity Specialist Certificate',
    features: [
      'Network security fundamentals',
      'Threat detection and analysis',
      'Incident response planning',
      'Security tools and technologies',
      'Risk assessment and management',
      'Compliance and governance'
    ],
    color: 'border-red-500'
  },
  {
    id: '3',
    title: 'Web Application Development',
    duration: '6 months',
    description: 'Build dynamic web applications using modern frameworks and technologies. Focus on user experience and responsive design.',
    level: 'Beginner to Intermediate',
    certification: 'Web Application Developer Certificate',
    features: [
      'HTML5, CSS3, and JavaScript mastery',
      'React.js and Vue.js frameworks',
      'RESTful API development',
      'Database integration',
      'Responsive design principles',
      'Testing and debugging'
    ],
    color: 'border-green-500'
  },
  {
    id: '4',
    title: 'Ethical Hacking',
    duration: '10 months',
    description: 'Learn authorized penetration testing and vulnerability assessment to help organizations secure their systems.',
    level: 'Advanced',
    certification: 'Certified Ethical Hacker (CEH) Preparation + Internal Certificate',
    features: [
      'Penetration testing methodologies',
      'Network and web application security',
      'Malware analysis and reverse engineering',
      'Social engineering awareness',
      'Vulnerability assessment tools',
      'Report writing and communication'
    ],
    color: 'border-purple-500'
  },
  {
    id: '5',
    title: 'Microsoft Azure Cloud',
    duration: '4 months',
    description: 'Master Microsoft Azure cloud platform with hands-on labs and prepare for official Microsoft certifications.',
    level: 'Intermediate',
    certification: 'Azure Fundamentals (AZ-900) + Azure Administrator (AZ-104) Preparation',
    features: [
      'Azure services and architecture',
      'Virtual machines and networking',
      'Storage and database services',
      'Identity and access management',
      'Monitoring and troubleshooting',
      'Cost management and optimization'
    ],
    color: 'border-blue-600'
  },
  {
    id: '6',
    title: 'CompTIA A+',
    duration: '3 months',
    description: 'Build foundational IT skills covering hardware, software, networking, and troubleshooting for entry-level tech careers.',
    level: 'Beginner',
    certification: 'CompTIA A+ Certification Preparation',
    features: [
      'Hardware installation and configuration',
      'Operating system basics',
      'Network fundamentals',
      'Security best practices',
      'Troubleshooting methodologies',
      'Mobile device management'
    ],
    color: 'border-yellow-500'
  },
  {
    id: '7',
    title: 'CompTIA Security+',
    duration: '4 months',
    description: 'Essential cybersecurity concepts covering threats, vulnerabilities, and security technologies for IT professionals.',
    level: 'Intermediate',
    certification: 'CompTIA Security+ Certification Preparation',
    features: [
      'Security threats and vulnerabilities',
      'Cryptography and PKI',
      'Identity and access management',
      'Network security implementation',
      'Risk management frameworks',
      'Incident response procedures'
    ],
    color: 'border-red-600'
  },
  {
    id: '8',
    title: 'CompTIA Network+',
    duration: '3 months',
    description: 'Comprehensive networking concepts including network design, implementation, and troubleshooting.',
    level: 'Intermediate',
    certification: 'CompTIA Network+ Certification Preparation',
    features: [
      'Network architecture and design',
      'Switching and routing concepts',
      'Wireless networking',
      'Network security implementation',
      'Network troubleshooting',
      'Cloud networking fundamentals'
    ],
    color: 'border-indigo-500'
  },
  {
    id: '9',
    title: 'OSCP Preparation',
    duration: '12 months',
    description: 'Intensive penetration testing course preparing you for the challenging OSCP certification exam.',
    level: 'Advanced',
    certification: 'OSCP Exam Preparation + Internal Advanced Penetration Testing Certificate',
    features: [
      'Advanced penetration testing techniques',
      'Buffer overflow exploitation',
      'Post-exploitation strategies',
      'Report writing for penetration tests',
      'Hands-on lab environments',
      'Exam preparation strategies'
    ],
    color: 'border-gray-700'
  },
  {
    id: '10',
    title: 'Certified Ethical Hacker (CEH)',
    duration: '6 months',
    description: 'Official CEH certification preparation covering ethical hacking methodologies and tools.',
    level: 'Advanced',
    certification: 'CEH Certification Preparation',
    features: [
      'Ethical hacking methodologies',
      'Footprinting and reconnaissance',
      'System hacking and malware',
      'Web application security',
      'Wireless network hacking',
      'Cryptography and steganography'
    ],
    color: 'border-purple-600'
  },
  {
    id: '11',
    title: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    duration: '4 months',
    description: 'Entry-level penetration testing certification focusing on practical skills and real-world scenarios.',
    level: 'Beginner to Intermediate',
    certification: 'eJPT Certification Preparation',
    features: [
      'Assessment methodologies',
      'Host and network security',
      'Web application penetration testing',
      'Reporting and communication',
      'Practical lab exercises',
      'Real-world simulations'
    ],
    color: 'border-teal-500'
  },
  {
    id: '12',
    title: 'Cisco CCNA',
    duration: '6 months',
    description: 'Cisco Certified Network Associate certification covering networking fundamentals and Cisco technologies.',
    level: 'Intermediate',
    certification: 'CCNA Certification Preparation',
    features: [
      'Network fundamentals',
      'Routing and switching',
      'IP connectivity and services',
      'Security fundamentals',
      'Automation and programmability',
      'Hands-on lab practice'
    ],
    color: 'border-blue-700'
  },
  {
    id: '13',
    title: 'Cisco CCNP',
    duration: '8 months',
    description: 'Advanced Cisco networking certification for experienced professionals seeking specialized skills.',
    level: 'Advanced',
    certification: 'CCNP Certification Preparation',
    features: [
      'Advanced routing protocols',
      'Complex switching configurations',
      'Network design and implementation',
      'Troubleshooting methodologies',
      'Network optimization',
      'Enterprise-level solutions'
    ],
    color: 'border-blue-800'
  },
  {
    id: '14',
    title: 'Tourism and Hospitality Management',
    duration: '6 months',
    description: 'Comprehensive tourism management with digital marketing integration for the modern hospitality industry.',
    level: 'Beginner to Intermediate',
    certification: 'Tourism and Hospitality Management Certificate',
    features: [
      'Tourism industry fundamentals',
      'Hotel and hospitality management',
      'Customer service excellence',
      'Digital marketing for tourism',
      'Revenue management',
      'Sustainable tourism practices'
    ],
    color: 'border-green-600'
  },
  {
    id: '15',
    title: 'Digital Marketing',
    duration: '4 months',
    description: 'Master digital marketing strategies including social media, SEO, content marketing, and analytics.',
    level: 'Beginner to Intermediate',
    certification: 'Digital Marketing Professional Certificate',
    features: [
      'Social media marketing',
      'Search engine optimization (SEO)',
      'Content marketing strategies',
      'Email marketing campaigns',
      'Google Analytics and reporting',
      'Paid advertising (Google Ads, Facebook Ads)'
    ],
    color: 'border-pink-500'
  }
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Course Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of technology and business courses, 
            all designed to empower East African girls with in-demand skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course)}
            />
          ))}
        </div>
      </div>
      
      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Courses;