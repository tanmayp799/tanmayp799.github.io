const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tanmayp799.github.io/',
  title: 'About',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tanmay Patil',
  role: 'CSE Sophomore at IIT Bombay',
  description:
    'I am an AI-ML Enthusiast, currently deep diving into the field. I also find myself interested in various algorithms and have fun studying and implementing them.' +
    ' Apart from coding, I am also interested in financial markets.' +
    ' I am a competitive and hardworking individual always trying to perform better than yesterday.' +
    ' I like solving real world problems, and with my grit, I can be counted on to get the work done.' +
    'I am always open to networking and believe in learning from wherever I can.',
  resume: 'https://bighome.iitb.ac.in/index.php/s/YSgKEgyR4Mtfg6Y',
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
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Python',
  'Java',
  'Bash',
  'Git',
  'HTML',
  'CSS',
  'Web Scraping',
  'JavaScript',
  'MongoDB',
  'React',
  'Nodejs',
  'SQL',
  'AWK',
  'SED',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tanmay.patil.iitb@gmail.com',
}

export { header, about, projects, skills, contact }
