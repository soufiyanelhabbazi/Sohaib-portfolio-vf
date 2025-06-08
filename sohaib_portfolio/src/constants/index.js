import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  sql,
  django,
  sklearn,
  reactjs,
  nodejs,
  expressjs,
  mongodb,
  git,
  figma,
  docker,
  jenkins,
  bceii,
  ecn,
  um6p,
  bycode,
  traffic,
  smarthome,
  ecomm,
  threejs,
  este,
  aia,
  freelancer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ReactJs Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "November 2024 - April 2025",
    points: [
      "Built e commerce projects for clients.",
      "Developed responsive user interfaces using React.js and Tailwind CSS.",
      "Designed secure backends with Node.js/Express and REST APIs.",
      "Integrated payment solutions (Stripe) and email services (SendGrid).",
      "Implemented secure authentication with JWT.",
      "Managed the full development lifecycle: scoping, implementation, testing, and delivery.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ECN Consulting",
    icon: ecn,
    iconBg: "#383E56",
    date: "October 2022 - October 2024",
    points: [
      "Client: Swiss Life Banque Privé, Paris, France.",
      "Analyzed project specifications and proposed technical solutions tailored to the projects specific needs.",
      "Developed a microservice to expose payment and money transfer services to third party systems using REST APIs, React.js, and Node.js.",
      "Performed unit testing using Mockito and PowerMock.",
      "Set up CI/CD pipelines with Jenkins to automate testing and deployment of software changes to the cloud.",
      "Technology and banking information systems (CORE BANKING) consulting professional, specializing in Avaloq programming language.",
    ],
  },
  {
    title: "ENSET - PFE Internship - Software Engineer",
    company_name: "UM6P Bengurir",
    icon: um6p,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jul 2022",
    points: [
      "Designed and developed a web solution for streamflow forecasting in the Rheraya sub basin (Marrakech Tensift) using artificial intelligence methods.",
      "Tools: ReactJs, NodeJs, ExpressJs, MongoDB, Python , Bokeh, Panel , HvPlot , Scikit learn , Numpy , Pandas;",
    ],
  },
  {
    title: "ENSET - Engineering Internship - Software Engineer",
    company_name: "BYCODE",
    icon: bycode,
    iconBg: "#383E56",
    date: "Jul 2021 - Sep 2021",
    points: [
      "Development of a Facial Recognition-Based Attendance System.",
      "Tools: ReactJs, NodeJs, ExpressJs, MongoDB; Python , OpenCv , Dlib , Matplotlib , Seaborn , Numpy , Pandas;",
    ],
  },
  {
    title: "ENSET - Initiation Internship - Mobile Developer",
    company_name: "BCEII",
    icon: bceii,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Sep 2020",
    points: [
      "Development of a Mobile Application for Managing Staff Transportation",
      "Tools: Java , NodeJs;",
    ],
  },
  {
    title: "ESTE -  End of Studies Internship - Full Stack Developer",
    company_name: "the Higher School of Technology of Essaouira",
    icon: este,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Jul 2019",
    points: [
      "Development of an e-learning website for the school.",
      "Tools: ReactJs ,NodeJs ,Mongodb ,ExpressJs;",
    ],
  },
  {
    title: "ESTE - Technical Internship - Full Stack Developer",
    company_name: "AIA Expert",
    icon: aia,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Sep 2018",
    points: [
      "Development of a stock management website.",
      "Tools: ReactJs ,NodeJs ,Mongodb ,ExpressJs;",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sohaib proved me wrong.",
    name: "Imane Dishka",
    designation: "CEO",
    company: "Braincraft",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a software developper who truly cares about their clients' success like Sohaib does.",
    name: "Verhile Sylvain",
    designation: "It Manager",
    company: "SLBP",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sohaib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Traffic Sign AI",
    description:
      "TrafficSignAI is an innovative project aimed at developing a robust and accurate system for the detection and recognition of traffic signs. Leveraging advanced computer vision techniques and machine learning algorithms, this system is designed to enhance road safety by accurately identifying and classifying traffic signs in real-time.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "internet of things",
        color: "green-text-gradient",
      },
      {
        name: "Protocole MQTT",
        color: "pink-text-gradient",
      },
    ],
    image: traffic,
    source_code_link: "https://github.com/",
  },
  {
    name: "SmartHome Prototype",
    description:
      "The SmartHome Prototype project is dedicated to developing a state-of-the-art prototype of a smart home system. This system aims to revolutionize modern living by integrating advanced IoT (Internet of Things) technologies, artificial intelligence, and automation to create a seamless, efficient, and user-friendly home environment.",
    tags: [
      {
        name: "Ml,internet of things",
        color: "blue-text-gradient",
      },
      {
        name: "carte arduino, esp32",
        color: "green-text-gradient",
      },
      {
        name: "MIT app",
        color: "pink-text-gradient",
      },
    ],
    image: smarthome,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Solutions",
    description:
      "As a skilled freelancer, the E-Commerce Solutions project focuses on creating custom e-commerce websites tailored to meet the unique needs of multiple clients. By leveraging the latest web development technologies, this projects aims to deliver high-performance, user-friendly, and visually appealing online stores that drive sales and enhance customer experience.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Payloadcms",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs(3D)",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
