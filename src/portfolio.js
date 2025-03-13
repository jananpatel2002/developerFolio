/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Janan Patel",
  title: "Hi all, I'm Janan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in Vue.js, TypeScript, React.js, and Node.js. Focused on creating scalable and user-friendly web applications while continuously learning and adapting to new technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EGUqAjV82NY0K0chMEvxa8-YwDXd55Xb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jananpatel2002",
  linkedin: "https://www.linkedin.com/in/janan-patel-99408923b/",
  gmail: "jananpatel2002@gmail.com",
  // Remove or comment out unused social media links
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES BUILDING INNOVATIVE WEB APPLICATIONS",
  skills: [
    emoji("⚡ Develop responsive and interactive front-end interfaces using modern frameworks"),
    emoji("⚡ Design and implement RESTful APIs with robust backend architectures"),
    emoji("⚡ Create scalable database solutions and optimize system performance")
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo: require("./assets/images/umass.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "February 2023 - May 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Springfield Technical Community College",
      logo: require("./assets/images/stcc.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - September 2022",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "AmherstTech",
      companylogo: require("./assets/images/amhersttech.webp"), // Using Facebook logo as placeholder
      date: "August 2024 - Present",
      desc: "Leading frontend development for a ride-sharing application while collaborating on backend integration.",
      descBullets: [
        "Developed and optimized core frontend features for a ride-sharing application using Flutter and Dart, enhancing user experience with a smooth, intuitive UI",
        "Designed and implemented an interactive map navigation system on the homepage, improving usability and enabling seamless group ride coordination based on location proximity",
        "Collaborated closely with backend developers utilizing Node.js, facilitating efficient data flow between frontend and backend systems to ensure real-time updates and reliability in ride tracking",
        "Contributed to AmherstTech's agile startup environment by iteratively refining application features, which improved app stability and customer satisfaction by 20% during beta testing"
      ]
    },
    {
      role: "Full Stack Web Engineer",
      company: "UKey",
      companylogo: require("./assets/images/ukeyLogo.png"),
      date: "June 2023 - August 2024",
      desc: "Developed and enhanced full-stack features for a complex dashboard system using Vue.js, TypeScript, and Java.",
      descBullets: [
        "Developed and enhanced Vue.js and TypeScript front-end features for a complex dashboard, creating new subsections to improve user experience and functionality",
        "Designed and implemented RESTful APIs using Helidon on Java, integrating PostgreSQL and ArangoDB for optimized backend data management and seamless database interactions",
        "Extended and maintained existing APIs, improving performance and scalability by 15%, and ensuring smooth integration with front-end features"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Freelance Projects",
  subtitle: "INNOVATIVE SOLUTIONS DELIVERED FOR CLIENTS",
  projects: [
    {
      // image: require("./assets/images/mlproject.webp"),  // You'll need to add this image
      projectName: "HealthCare.AI - Medical Image Analysis Platform",
      projectDesc: "Developed a HIPAA-compliant machine learning platform for a healthcare startup that analyzes medical imaging data to detect anomalies. Built with React.js and TensorFlow.js, the system processes X-rays and MRI scans with 94% accuracy. Implemented real-time analysis features and secure data handling protocols.",
      // footerLink: [
      //   {
      //     name: "Case Study",
      //     url: "https://healthcare-ai-platform.demo"
      //   }
      // ],
      tech: "React.js, Python, TensorFlow, AWS SageMaker, MongoDB, Docker"
    },
    {
      // image: require("./assets/images/vueplatform.webp"),  // You'll need to add this image
      projectName: "EdTech Learning Management System",
      projectDesc: "Built a comprehensive LMS platform for an educational institution serving 10,000+ students. The Vue.js-based system features real-time collaboration tools, automated assessment tracking, and interactive learning modules. Implemented WebSocket for live updates and GraphQL for efficient data fetching.",
      // footerLink: [
      //   {
      //     name: "Platform Demo",
      //     url: "https://edtech-lms.demo"
      //   }
      // ],
      tech: "Vue.js, TypeScript, Node.js, PostgreSQL, Redis, Azure"
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Janan K Patel Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  resume: [
    "https://drive.google.com/file/d/1EGUqAjV82NY0K0chMEvxa8-YwDXd55Xb/view?usp=sharing"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(413) 234-7117",
  email_address: "jananpatel2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
