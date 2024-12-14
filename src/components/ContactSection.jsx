import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="py-16 bg-teal-600 text-white">
      <h2 className="text-3xl text-center">Contact Me</h2>
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
        Feel free to reach out if you want to collaborate or just have a chat.
      </p>
      <div className="flex justify-center mt-8">
        <a 
          href="mailto:duse.trevor@example.com" 
          className="bg-teal-800 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
