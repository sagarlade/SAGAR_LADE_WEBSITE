import { Info, MapPin, Languages} from 'lucide-react';
import { personalInfo, aboutMe } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Get to know more about me, my background, and what I do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {aboutMe}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center">
                <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.languages.join(', ')}</span>
              </div>
              <div className="flex items-start col-span-1 sm:col-span-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform rotate-3 absolute top-0 left-0"></div>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform -rotate-2 z-10 h-full">
              <div className="flex items-center mb-6">
                <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Personal Information</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Full Name</span>
                  <span className="text-gray-800 dark:text-gray-100 font-medium">{personalInfo.name}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">{personalInfo.email}</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Phone</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-800 dark:text-gray-100 font-medium">{personalInfo.phone}</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">LinkedIn</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">LinkedIn Profile</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">GitHub</span>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">GitHub Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;