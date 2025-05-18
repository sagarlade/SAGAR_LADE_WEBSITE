import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">My Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            My professional journey and work experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="mb-10 ml-8"
              >
                <div className="absolute w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center -left-6 border-2 border-blue-500 dark:border-blue-400 shadow-lg z-10">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.position}</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">{job.company}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;