const about = document.querySelector('#about');
const experience = document.querySelector('#experience');
const projects = document.querySelector('#projects');
const HOF = document.querySelector('#HOF');
const resume = document.querySelector('#resume');
const contact = document.querySelector('#contact');

const aboutContent = document.querySelector('#about-content');
const experienceContent = document.querySelector('#experience-content');
const projectContent = document.querySelector('#project-content');
const HOFcontent = document.querySelector('#HOF-content');
const resumeContent = document.querySelector('#resume-content');
const contactContent = document.querySelector('#contact-content');

// Helper function to handle window background colors
const windowOptions = {
  onfocus: function () {
    this.setBackground('#00aa00');
  },
  onblur: function () {
    this.setBackground('#777');
  }
};

about.addEventListener('click', () => {
  new WinBox({
    title: 'About Me',
    width: '450px',
    height: '400px',
    top: 50,
    left: 50,
    mount: aboutContent,
    ...windowOptions
  });
});

experience.addEventListener('click', () => {
  new WinBox({
    title: 'Experience',
    width: '500px',
    height: '450px',
    top: 100,
    left: 100,
    mount: experienceContent,
    ...windowOptions
  });
});

projects.addEventListener('click', () => {
  new WinBox({
    title: 'Projects',
    width: '500px',
    height: '450px',
    top: 150,
    left: 150,
    mount: projectContent,
    ...windowOptions
  });
});

HOF.addEventListener('click', () => {
  new WinBox({
    title: 'Awards & Certifications',
    width: '450px',
    height: '400px',
    top: 200,
    left: 200,
    mount: HOFcontent,
    ...windowOptions
  });
});

resume.addEventListener('click', () => {
  new WinBox({
    title: 'Resume',
    width: '400px',
    height: '250px',
    top: 250,
    left: 250,
    mount: resumeContent,
    ...windowOptions
  });
});

contact.addEventListener('click', () => {
  new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '250px',
    top: 300,
    left: 300,
    mount: contactContent,
    ...windowOptions
  });
});
