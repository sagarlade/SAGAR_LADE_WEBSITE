import { useState } from 'react';
import { Code, Database, Layout, Settings } from 'lucide-react';
import { skillCategories } from '../data/skills';

const categoryIcons = {
  Backend: <Code className="w-6 h-6" />,
  Frontend: <Layout className="w-6 h-6" />,
  Databases: <Database className="w-6 h-6" />,
  Others: <Settings className="w-6 h-6" />
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            A showcase of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all ${
                activeCategory === category.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <span>{categoryIcons[category.category as keyof typeof categoryIcons]}</span>
              <span>{category.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
            {categoryIcons[activeCategory as keyof typeof categoryIcons]}
            <span className="ml-2">{activeCategory} Skills</span>
          </h3>
          <div className="space-y-6">
            {skillCategories
              .find((category) => category.category === activeCategory)
              ?.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;