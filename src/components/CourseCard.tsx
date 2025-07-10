import React from 'react';
import { Clock, Users, Award, ExternalLink } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  level: string;
  certification: string;
  features: string[];
  color: string;
}

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-l-4 ${course.color}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
          <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors" />
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            <span>Free</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{course.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {course.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-sm font-medium text-blue-800">
            <Award className="h-4 w-4 inline mr-1" />
            Certification: {course.certification}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;