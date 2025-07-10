import React from 'react';
import { MapPin, Users, GraduationCap } from 'lucide-react';

const countries = [
  {
    name: 'Democratic Republic of Congo',
    capital: 'Kinshasa',
    flag: '🇨🇩',
    students: '2,500+',
    courses: 'All Courses Available',
    contact: 'drc@eastafricangirls.tech'
  },
  {
    name: 'Tanzania',
    capital: 'Dodoma',
    flag: '🇹🇿',
    students: '1,800+',
    courses: 'All Courses Available',
    contact: 'tanzania@eastafricangirls.tech'
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    flag: '🇷🇼',
    students: '1,200+',
    courses: 'All Courses Available',
    contact: 'rwanda@eastafricangirls.tech'
  },
  {
    name: 'Burundi',
    capital: 'Gitega',
    flag: '🇧🇮',
    students: '800+',
    courses: 'All Courses Available',
    contact: 'burundi@eastafricangirls.tech'
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    flag: '🇰🇪',
    students: '3,200+',
    courses: 'All Courses Available',
    contact: 'kenya@eastafricangirls.tech'
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    flag: '🇺🇬',
    students: '2,100+',
    courses: 'All Courses Available',
    contact: 'uganda@eastafricangirls.tech'
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    flag: '🇸🇸',
    students: '600+',
    courses: 'All Courses Available',
    contact: 'southsudan@eastafricangirls.tech'
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    flag: '🇸🇴',
    students: '900+',
    courses: 'All Courses Available',
    contact: 'somalia@eastafricangirls.tech'
  },
  {
    name: 'South Africa (Headquarters)',
    capital: 'Johannesburg',
    flag: '🇿🇦',
    students: '1,500+',
    courses: 'All Courses + Admin',
    contact: 'headquarters@eastafricangirls.tech'
  }
];

const Countries = () => {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving East Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to empower girls across East Africa with technology education. 
            Our presence spans 9 countries with headquarters in Johannesburg, South Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                country.name.includes('Headquarters') 
                  ? 'border-red-200 bg-red-50' 
                  : 'border-blue-200 hover:border-blue-300'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{country.flag}</div>
                  {country.name.includes('Headquarters') && (
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      HQ
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {country.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{country.capital}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{country.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">{country.courses}</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800 font-medium">
                    Contact: {country.contact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="text-lg mb-6">
              No matter which East African country you're from, we're here to support your tech journey.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('application-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;