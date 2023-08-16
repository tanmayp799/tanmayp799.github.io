const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tanmayp799.github.io/',
  title: 'About',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tanmay Patil',
  role: 'CSE Junior at IIT Bombay',
  description:
    'Hello!',
  resume: 'https://drive.google.com/file/d/1-s_EmxjSkeQxiD-4_-gE-S8JCUn8hA18/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/tanmay-patil-8129b6226/',
    github: 'https://github.com/tanmayp799',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Bank Customer Churn Prediction',
    description:
      'Performed EDA(Exploratory Data Analysis) to find a solution to customer churning and constructed an ANN to predict if a customer will leave the bank or not.',
    stack: ['Python', 'Pandas', 'Tensorflow'],
    sourceCode: 'https://github.com/tanmayp799/Bank-Customer-Churn-Predictor',
  },
  {
    name: 'Railway Planner',
    description:
      'Built a railway planner in C++ using various Data Structures capable of performing multiple complex tasks, as a part of my DSA course.',
    stack: ['C++'],
    sourceCode: 'https://github.com/tanmayp799/Railway-Planner',
  },
  {
    name: 'Generating Representative Images via PCA',
    description:
      'Applied Principal Component analysis concepts to generate representative images of fruits from sampled dataset.',
    stack: ['Python', 'Numpy', 'Pandas'],
    sourceCode: 'https://github.com/tanmayp799/Multivariate-Gaussian_PCA',
  },
  {
    name: '8-Ball Pool',
    description:
      'Built a 2-player 8-ball Pool game in a team project using principles of Object Oriented Programming in Javascript.',
    stack: ['Javscript', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/DheGit/devcom-game-hackathon',
  },
  {
    name: 'Tic-Tac-Toe',
    description:
      'Built the classic Tic-Tac-Toe using principles of Object Oriented Programming in Java language.',
    stack: ['Java'],
    sourceCode: 'https://github.com/tanmayp799/Tic-Tac-Toe',
  },
  {
    name: 'Bubble Shooter',
    description:
      'Using ideas of OOP, built an User-interactive bubble shooter game in C++',
    stack: ['C++'],
    sourceCode: 'https://github.com/tanmayp799/Bubble-Shooter',
  },
  {
    name: 'E-Learning Website',
    description:
      'Built an E-Learning Website in a team project using MERN stack.',
    stack: ['Nodejs', 'ReactJS', 'Express', 'MongoDB'],
    sourceCode:
      'https://github.com/ATAck-Portal-for-Courses/Portal-For-Courses',
  },
  {
    name: 'File Transfer Protocol(FTP) Simulation',
    description: 
      'Implemented an FTP using Socket Programming in C++ in multiple phases, with increasing functionality in each phase.',
    stack: ['C++','Socket Programming','Computer Networks'],
    sourceCode:
      'https://github.com/tanmayp799/SimpleFTP',
  },
  {
    name: 'Improving Program using Michroarchitecture Enhancements',
    description:
      'Used VTune profiler to identify and enhance program Hotspots. Implemented and tested inclusion policies in ChampSim simulator.',
    stack: ['C++','VTune','ChampSim','Computer Architecture'],
    sourceCode:
      'https://github.com/tanmayp799/CS230-Project',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Python',
  'Bash',
  'Git',
  'HTML',
  'CSS',
  'Web Scraping',
  'JavaScript',
  'MongoDB',
  'ReactJS',
  'NodeJS',
  'ExpressJS',
  'SQL',
  'VTune',
  'VHDL',
  'Tensorflow',
  'Keras',
  'Tableau',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tanmay.patil.iitb@gmail.com',
}

export { header, about, projects, skills, contact }
