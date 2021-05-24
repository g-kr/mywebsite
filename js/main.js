const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const HOF=document.querySelector('#HOF')
const projects=document.querySelector('#projects')
const resume=document.querySelector('#resume')
const HOFcontent=document.querySelector('#HOF-content')
const projectContent=document.querySelector('#project-content')
const resumeContent=document.querySelector('#resume-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

HOF.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Hall Of Fames',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 250,
    right: 50,
    bottom: 50,
    left: 350,
    mount: HOFcontent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

projects.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Projects',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 350,
    right: 50,
    bottom: 50,
    left: 450,
    mount: projectContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

resume.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Resume',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 450,
    right: 50,
    bottom: 50,
    left: 550,
    mount: resumeContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})