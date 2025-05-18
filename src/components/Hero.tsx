import { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import resume from '../assets/resume.pdf';
import sagarImg from "../assets/sagar.jpg"


const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Backend Specialist', 'Frontend Developer'];

  useEffect(() => {
    const textToType = roles[currentIndex];
    let charIndex = 0;
    let typingInterval: number;
    
    // Type the text
    typingInterval = window.setInterval(() => {
      if (charIndex <= textToType.length) {
        setDisplayText(textToType.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Wait before erasing
        setTimeout(() => {
          // Erase the text
          const eraseInterval = window.setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(textToType.substring(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(eraseInterval);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);
    
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sagar Lade</span>
            </h1>
            <div className="h-8 md:h-10">
              <h2 className="text-2xl md:text-3xl text-purple-600 dark:text-purple-400 font-medium">
                {displayText}<span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 mb-8 max-w-xl mx-auto md:mx-0">
              Passionate about creating attractive and personalized websites with a focus on performance optimization and clean UI/UX.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={resume}
                download="Sagar_Lade_CV.pdf"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white rounded-full transition-all w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-pulse-slow">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src={sagarImg}
                  alt="Sagar Lade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;