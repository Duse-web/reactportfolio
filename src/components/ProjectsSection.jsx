import React from 'react';

const ProjectsSection = () => {
  return (
    <div id="projects" className="py-16 bg-white">
      <h2 className="text-3xl text-center">My Projects</h2>
      <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
        Here are some of the projects I've worked on:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {/* Example Project Card */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Project Title 1</h3>
          <p className="text-sm mt-2">Brief description of the project.</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
};

export default ProjectsSection;
