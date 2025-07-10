import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('application-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Empowering East African Girls in Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of young women across East Africa who are building the future through technology. 
            Free courses, certifications, and career opportunities await you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToApplication}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollToCourses}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Explore Courses
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">15+ Courses</h3>
              <p className="text-blue-200">Comprehensive tech programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">9 Countries</h3>
              <p className="text-blue-200">Across East Africa</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Certifications</h3>
              <p className="text-blue-200">Industry-recognized credentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;