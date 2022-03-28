import React from 'react';
import './Projects.css';
import image from '../images/Jose.jpg';
import resume from '../Resume/ResumeMe.pdf';
const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1 className="headings">PROJECTS</h1>
        <div className="gallery">
          <ul className="gallery-list">
            <li>
              <a
                href="https://unique-creponne-54302e.netlify.app/"
                target="_blank"
              >
                <img
                  src="https://1660200928.rsc.cdn77.org/wp-content/uploads/2019/12/shopping-apps.jpg"
                  alt="shopping img"
                />
              </a>
              <h4 className="project-title">Shopping App</h4>
              <div className="src-container">
                <h4>Click to view</h4>
                <div className="src-link">
                  <a
                    href="https://github.com/josephvijayJ/capstone-frontend"
                    target="_blank"
                  >
                    Frontend Source Code
                  </a>
                  <a
                    href="https://github.com/josephvijayJ/capstone_backend"
                    target="_blank"
                  >
                    Backend Source Code
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://heroic-gelato-550c0e.netlify.app"
                target="_blank"
              >
                <img
                  src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/05/AdobeStock_288803828-1-1024x576.jpeg"
                  alt="cryptocurrency img"
                />
              </a>
              <h4 className="project-title">Crypto Currency App</h4>
              <div className="src-container">
                <h4>Click to view</h4>
                <div className="src-link">
                  <a
                    href="https://github.com/josephvijayJ/cryptoApp"
                    target="_blank"
                  >
                    Frontend Source Code
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://eloquent-clafoutis-f975d4.netlify.app/"
                target="_blank"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/memories-inside-shirt-design-memories-inside-inspirational-motivational-handwritten-lettering-quote-171950654.jpg"
                  alt="shopping img"
                />
              </a>
              <h4 className="project-title">Story App</h4>

              <div className="src-container">
                <h4>Click to view</h4>
                <div className="src-link">
                  <a
                    href="https://github.com/josephvijayJ/storyapp-frontend"
                    target="_blank"
                  >
                    Frontend Source Code
                  </a>
                  <a
                    href="https://github.com/josephvijayJ/storyappbackend"
                    target="_blank"
                  >
                    Backend Source Code
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="https://github.com/josephvijayJ?tab=repositories"
                target="_blank"
              >
                <img
                  src="https://www.pullrequest.com/blog/github-code-review-service/images/github-logo_hub2899c31b6ca7aed8d6a218f0e752fe4_46649_1200x1200_fill_box_center_2.png"
                  alt="GIT HUB IMG"
                />
              </a>
              <a
                href="https://github.com/josephvijayJ?tab=repositories"
                target="_blank"
                className=" deploying-project-title"
              >
                GITHUB LINK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
