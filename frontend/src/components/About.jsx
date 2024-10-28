import React, { useEffect, useRef } from 'react';

function About() {
  const imageRef = useRef(null);

  // Use Intersection Observer to trigger the animation when "About" comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            imageRef.current.classList.add('image-in-view');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-16">
        {/* Card-like Paragraph with Glassy Effect and Dark 3D Shadow */}
        <div className="w-11/12 md:w-2/3 bg-gradient-to-r from-yellow-200 to-white p-10 rounded-xl shadow-2xl hover:shadow-dark transform hover:-translate-y-2 transition-all duration-500 ease-in-out text-left">
          {/* Title */}
          <div className="w-11/12 md:w-2/3 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              <span className="text-yellow-500 block mb-5">Who Are We?</span>
            </h1>
          </div>
          {/* Paragraph */}
          <p className="text-2xl md:text-2xl text-black leading-relaxed">
            At <span className="text-yellow-500 font-bold">FocusFy</span>, we are committed to helping students improve their focus and productivity through cutting-edge technology. Our web application integrates image processing and AI/ML to analyze users' posture, gestures, and lighting conditions via webcam.
            <br/><br/>
            With real-time feedback, performance tracking, and personalized daily plans, FocusFy offers a comprehensive solution to boost concentration and create better study habits. We believe that small changes can lead to big improvements, which is why we employ gamification techniques, such as earning coins and maintaining streaks, to keep students motivated.
            <br/><br/>
            Whether you're struggling with distractions, poor posture, or ineffective time management, FocusFy is here to guide you on your journey to success. Designed for high school and college students, FocusFy is not just another productivity app—it’s a tool that adapts to your individual needs, helping you achieve more with focused efforts.
            <br/><br/>
            Join us in revolutionizing how students study and thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
