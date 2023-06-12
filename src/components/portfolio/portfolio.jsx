import React from 'react';
import IMG1 from '../../assets/p6.png';
import IMG2 from '../../assets/p4.png';
import IMG3 from '../../assets/p2.png';
import IMG4 from '../../assets/p3.png';
import IMG5 from '../../assets/p1.png';
import IMG6 from '../../assets/p5.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Live Chat Application',
      img: IMG1,
      description:
        'Live Chat Application that allows users to chat in real time',
      technologies: 'React | Node JS | Socket.io',
      link: 'https://clinquant-bienenstitch-4b3f07.netlify.app/',
      github: 'https://github.com/kady2023/Live-Chat-Application',
    },
    {
      id: 2,
      title: 'iCoder',
      img: IMG4,
      description:
        'Static Website made using Bootstrap for UI/UX Design',
      technologies: 'HTML | JavaScript | Bootstrap',
      link: 'https://kady2023.github.io/iCoder-Bootstrap/',
      github: 'https://github.com/kady2023/iCoder-Bootstrap',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React JS | bootstrap',
      link: 'https://kady2023.github.io/Todo-List-React/',
      github: 'https://github.com/kady2023/Todo-List-React',
    },
    {
      id: 4,
      title: 'JS-Watch',
      img: IMG3,
      description:
        'Static website that displays real time clock and world clock for different major cities',
      technologies: 'JavaScript | HTML',
      link: 'https://kady2023.github.io/JS-Watch/',
      github: 'https://github.com/kady2023/JS-Watch',
    },
    {
      id: 5,
      title: 'To-do List',
      img: IMG5,
      description:
        'Beautiful website made for managing daily tasks',
      technologies: 'JavaScript | CSS',
      link: 'https://kady2023.github.io/TODOs-list-JS/',
      github: 'https://github.com/kady2023/TODOs-list-JS',
    },
    {
      id: 6,
      title: 'TextUtils',
      img: IMG6,
      description:
        'TextUtils gives you a way to analyze your text quickly and efficiently.',
      technologies: 'React | JavaScript | CSS',
      link: 'https://kady2023.github.io/Textutils-React/',
      github: 'https://github.com/kady2023/Textutils-React',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;