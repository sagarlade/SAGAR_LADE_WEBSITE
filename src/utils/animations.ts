// Animation utility functions
export const fadeIn = (element: Element, delay: number = 0) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(element);
};

export const setupAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  animatedElements.forEach((element, index) => {
    element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500', 'ease-out');
    fadeIn(element, index * 100);
  });
};