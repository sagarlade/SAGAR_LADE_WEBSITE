import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">My Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="md:w-1/4 bg-gradient-to-br from-blue-500 to-purple-600 p-6 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="md:w-3/4 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">{edu.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;