/**
 * @copyright 2024 Nischal Bhandari
 * @license Apache-2.0
 */


/**
 * Components
 */

import ProjectCard from "./ProjectCard";

const works = [
  // Empty projects for now, but still showing the boxes
  // {
  //   imgSrc: '/images/project-1.jpg',
  //   title: 'Full stack music app',
  //   tags: ['API', 'MVC', 'Development'],
  //   projectLink: ''
  // },
  {
    imgSrc: '/images/project-1.jpg',  // Empty for now
    title: 'Parking Management System',  // Empty for now
    tags: ['Data Structures', 'Real-time'],
    projectLink: 'https://github.com/zkyko/DS3358--Parking-Management-System'
  },
  {
    imgSrc: '/images/project-2.jpg',  // Empty for now
    title: 'AI Voice Calling System',  // Empty for now
    tags: ['Machine Learning', 'APIs', 'Voice Automation', 'Voice Cloning', 'Task Scheduling'],  // Empty for now
    projectLink: 'https://github.com/zkyko/VoiceCallingSystem'
  },
  {
    imgSrc: '/images/project-3.jpg',  // Empty for now
    title: 'AI Voice Assistant',  // Empty for now
    tags: ['Python', 'ChatGPT', 'Voice Recognition', 'Natural Language Processing', 'AI Integration', 'Automation'],  // Empty for now
    projectLink: 'https://github.com/zkyko/VoiceAssistant'
  },
  {
    imgSrc: '/images/project-4.jpg',  // Empty for now
    title: 'Java Chess Game with GUI',  // Empty for now
    tags: ['Java', 'GUI', 'Game Development', 'Chess', 'Object-Oriented Programming'],  // Empty for now
    projectLink: 'https://github.com/zkyko/JavaChess'
  },
  {
    imgSrc: '',  // Empty for now
    title: '',  // Empty for now
    tags: [],  // Empty for now
    projectLink: ''
  },
  {
    imgSrc: '',  // Empty for now
    title: '',  // Empty for now
    tags: [],  // Empty for now
    projectLink: ''
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-2 reveal-up">
          My portfolio highlights
        </h2>

        {/* Add "Coming Soon" text under the heading */}
        <p className="text-lg text-gray-500 mb-8 reveal-up">(Coming Soon)</p>

        {/* Display empty project cards */}
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
