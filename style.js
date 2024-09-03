// Hero Section Animation
gsap.fromTo('.hero-text', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });

// Project Card Animations
gsap.set('.project-card', { perspective: 800 });
gsap.to('.project-card:hover', { rotateY: 180, duration: 0.5 });

// Skill Bar Animations
gsap.from('.skill-bar', { width: 0, duration: 1 });

// Contact Form Animations
gsap.from('.form-input, .form-textarea', { opacity: 0, y: 20, stagger: 0.2 }, { opacity: 1, y: 0, duration: 1 });
