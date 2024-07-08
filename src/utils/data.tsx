import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  TwitterLogo,
  FilePdf,
  EnvelopeSimple,
} from "phosphor-react";
import { IApp } from "./interfaces";

const app: IApp = {
  title: "Ufuoma Oghenechovwe",
  desc: "Rukkie's Porfolio and Resume",
  hero: {
    tag: "hero",
    name: "Ufuoma Oghenechovwe",
    catchPhrase: "Frontend Engineer",
    text: "Creative",
    greeting: "Hey, I'm Rukkie",
    desc: "<p>Frontend Engineer</p>",
  },
  about: {
    tag: "about",
    name: "Ufuoma",
    bio: "I'm a frontend engineer with 3 years of experience collaborating with diverse and talented teams to deliver cutting-edge web projects. I have proven ability to seamlessly blend design with technical excellence. I pay great attention to detail. <p>I'm proficient and actively working with the tools and skillset listed below.<p/>",

    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "language",
            data: ["javascript", "typescript"],
          },
          {
            name: "frontend",
            data: ["reactJS", "vueJS", "nextJS", "nuxtJS"],
          },
          {
            name: "state-management",
            data: ["vuex", "redux", "react-query"],
          },
          {
            name: "styling",
            data: ["CSS3", "tailwindCSS", "MUI"],
          },
          // {
          //   name: "database",
          //   data: ["firebase", "graphql"],
          // },
          // { name: "animation", data: ["GSAP"] },
          { name: "others", data: ["git", "GSAP", "firebase"] },
        ],
      },
    ],
  },
  contact: {
    tag: "contact",
    email: "rukkiechowe@gmail.com",
    urls: [
      {
        icon: <FilePdf size={22} />,
        url: "/assets/Resume_Ufuoma_Oghenechovwe.pdf",
        title: "Resume",
      },
      {
        icon: <LinkedinLogo size={22} />,
        url: "https://linkedin.com/in/rukkiechovwe",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={22} />,
        url: "https://twitter.com/rukkiechovwe",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={22} />,
        url: "https://github.com/rukkiechovwe",
        title: "Github",
      },
    ],
  },

  experience: {
    tag: "experience",
    experiences: [
      {
        companyName: "Muzzlab Technologies",
        companyLink: "https://www.muzzlabtech.com/",
        duration: "July 2023 - present",
        jobTitle: "Frontend Engineer",
        workDone: [
          "⁠Played a key role in the successful development of a web application to automate manual processes enabling users to fill forms, make payments, and provide feedback. This greatly optimised operational efficiency and ensured high availability and reliability of services for users and administrators.",
          "Implemented features such as authentication, team management, and multi-stage due diligence processes. This included complex workflows for due diligence stages, such as request forms, online meetings, payment processing, NDA forms, and extensive questionnaires with file uploads.",
          "⁠Utilised Redux Toolkit & React Query for state management, optimising data flow and maintaining application scalability.",
          "Partnered with stakeholders to gather requirements, iterate on designs, and deliver solutions that effectively meet business objectives and user needs",
          "Contributed to enhancing the overall application architecture, code quality, and deployment processes, fostering a culture of continuous improvement within the development team.",
        ],
      },
      {
        companyName: "3RM",
        companyLink: "",
        duration: "November 2022 - May 2023",
        jobTitle: "Frontend Engineer",
        workDone: [
          "Worked closely with team members at 3RM to implement a scalable architecture and develop a Telegram Relationship Manager, enhancing web3 organisations' ability to manage interactions on the Telegram platform more effectively.",
          "Developed and maintained flawless integration of Telegram into the company's website, introducing essential features such as Telegram syncing, follow-up assignment, and conversation tracking.",
          "Transformed mockups and wireframes into well polished, functional and responsive web pages, ensuring cross-browser compatibility and delivering a smooth, visually appealing user experience.",
          "Enhanced website performance by implementing advanced code optimization techniques and utilising caching mechanisms, resulting in faster load times and significantly improved overall user experience.",
          "Demonstrated remarkable efficiency and time management skills in a fully remote role, showcasing the ability to work independently and deliver high-quality results without requiring close supervision.",
        ],
      },
      {
        companyName: "Metadapp",
        companyLink: "",
        duration: "September 2021 - March 2023",
        jobTitle: "Frontend Developer",
        workDone: [
          "Spearheaded the implementation of features such as Risk Management, Portfolio Management, Referral System, and Revoke Approval within the Metadapp web3 application.",
          "Optimised the entire codebase by meticulously improving and refactoring legacy code to adhere to null-safety and modern standards, resulting in better performance and an improved development experience.",
          "Collaborated effectively with team members to maintain the Metadapp Web3 dashboard, ensuring a seamless user experience and efficient presentation of information.",
          "Integrated GraphQL APIs, various third-party services, and Web3 APIs to elevate website functionality and enable efficient data retrieval, thereby enhancing overall user engagement.",
          "Conducted thorough testing and debugging protocols, quickly identifying and resolving frontend codebase issues to ensure a robust and error-free application.",
        ],
      },
      {
        companyName: "Xigma",
        companyLink: "",
        duration: "April 2021 - August 2021",
        jobTitle: "Frontend Developer Intern",
        workDone: [
          "Led the design and implementation of the solar service website, enabling users to purchase solar services and equipment from home while providing solar tips to enhance engagement and effectively promote solar services.",
          "Designed the mobile interface to ensure a seamless, user-friendly and visually appealing experience for users accessing the solar service on their mobile devices.",
          "Initiated and led a training program for a cohort of 10 interns, delivering a comprehensive introduction to frontend development that fostered a collaborative learning environment and boosted team skill development.",
        ],
      },
    ],
  },

  project: {
    tag: "project",
    deskTopProjects: [
      {
        title: "Feastpass",
        tags: ["nextjs", "tailwind"],
        desc: "Your Cities Food Guide",
        imgUrl: "assets/images/Screenshot-Feastpass.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.feastpasshq.com/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Wano.finance",
        tags: [
          "nextjs",
          "tailwind",
          "postgres",
          "metamask",
          "solidity",
          "layerzero",
          "infura",
          "truffle",
        ],
        desc: "Web3 omnichain payment infrastructure - Enhanced payment experience for 20M+ users in web3",
        imgUrl: "assets/images/Screenshot-Wano1.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://wano.finance/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Advice App",
        tags: ["vue"],
        desc: "Get life advices with this application.",
        imgUrl: "assets/images/Screenshot-AdviceApp.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-adviceapp.vercel.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/advice_app_vue3",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "Pocopay",
        tags: ["HTML", "CSS", "JS"],
        desc: "Simple business website template",
        imgUrl: "assets/images/Screenshot-Pocopay.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://pocopay-website.vercel.app/",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/pocopay-website",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "GACN",
        tags: ["react", "tailwind"],
        desc: "Gas Aggregator Company Nigeria LTD/GTE (GACN)",
        imgUrl: "assets/images/Screenshot-GACN.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.gacn.com/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Metadapp",
        tags: ["react", "MUI", "Web3"],
        desc: "An all in one Web3 dashboard",
        imgUrl: "assets/images/Screenshot-Metadapp.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://metadapp.com",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "RK-Store",
        tags: ["react", "styled-component"],
        desc: "An elegant ecommerce application.",
        imgUrl: "assets/images/Screenshot-RK-Store.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-ecommerce.vercel.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/ecommerce",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "Fem GPT",
        tags: ["react", "tailwind", "AI"],
        desc: "Female health advisor",
        imgUrl: "assets/images/Screenshot-FemGPT.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://fem-gpt.vercel.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/fem-gpt",
            tooltip: "View on github",
          },
        ],
      },

      // {
      //   title: "lastprice",
      //   tags: ["react", "redux", "ant design"],
      //   desc: "Buy and sell products at discounted or slashed prices.",
      //   imgUrl: "assets/images/Screenshot-Lastprice.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://amazing-torvalds-02adef.netlify.app",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/iamstanlee/last-price",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
      // {
      //   title: "MuqeeAI",
      //   tags: ["react", "nextJS", "tailwind"],
      //   desc: "Content creation on Autopilot.",
      //   imgUrl: "assets/images/Screenshot-Muqee.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://muqee.ai",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },
      // {
      //   title: "kivifood",
      //   tags: ["react", "styled-component"],
      //   desc: "Get the food you want from the comfort of your home.",
      //   imgUrl: "assets/images/Screenshot-Kivi.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://kivifood.netlify.app/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },
      // {
      //   title: "Art gallery",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple art gallery website template",
      //   imgUrl: "assets/images/Screenshot-ArtGallery.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-art-gallery.vercel.app",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/Art-gallery",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
    ],
    projects: [
      {
        title: "Feastpass",
        tags: ["nextjs", "tailwind"],
        desc: "Your Cities Food Guide",
        imgUrl: "assets/images/Screenshot-Feastpass.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.feastpasshq.com/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "GACN",
        tags: ["react", "tailwind"],
        desc: "Gas Aggregator Company Nigeria LTD/GTE (GACN)",
        imgUrl: "assets/images/Screenshot-GACN.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.gacn.com/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Wano.finance",
        tags: ["nextjs", "tailwind", "metamask"],
        desc: "Web3 omnichain payment infrastructure",
        imgUrl: "assets/images/Screenshot-Wano.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://wano.finance/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Metadapp",
        tags: ["react", "MUI", "Web3"],
        desc: "An all in one Web3 dashboard",
        imgUrl: "assets/images/Screenshot-Metadapp.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://metadapp.com",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "Fem GPT",
        tags: ["react", "tailwind CSS", "AI"],
        desc: "Female health advisor",
        imgUrl: "assets/images/Screenshot-FemGPT.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://fem-gpt.vercel.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/fem-gpt",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "RK-Store",
        tags: ["react", "styled-component"],
        desc: "An elegant ecommerce application.",
        imgUrl: "assets/images/Screenshot-RK-Store.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-ecommerce.vercel.app/",
            tooltip: "View the web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/ecommerce",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "Advice App",
        tags: ["vue"],
        desc: "Get life advices with this application.",
        imgUrl: "assets/images/Screenshot-AdviceApp.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-adviceapp.vercel.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/advice_app_vue3",
            tooltip: "View on github",
          },
        ],
      },

      {
        title: "Pocopay",
        tags: ["HTML", "CSS", "JS"],
        desc: "Simple business website template",
        imgUrl: "assets/images/Screenshot-Pocopay.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://pocopay-website.vercel.app/",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/pocopay-website",
            tooltip: "View on github",
          },
        ],
      },

      // {
      //   title: "MuqeeAI",
      //   tags: ["react", "nextJS", "tailwind CSS"],
      //   desc: "Content creation on Autopilot.",
      //   imgUrl: "assets/images/Screenshot-Muqee.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://muqee.ai",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },
      // {
      //   title: "kivifood",
      //   tags: ["react", "styled-component"],
      //   desc: "Get the food you want from the comfort of your home.",
      //   imgUrl: "assets/images/Screenshot-Kivi.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://kivifood.netlify.app/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },
      // {
      //   title: "TodoApp",
      //   tags: ["react"],
      //   desc: "Todo list application.",
      //   imgUrl: "assets/images/Screenshot-TodoApp.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkiechovwe.github.io/myapp",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/myapp",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
      // {
      //   title: "lastprice",
      //   tags: ["react", "redux", "ant design"],
      //   desc: "Buy and sell products at discounted or slashed prices.",
      //   imgUrl: "assets/images/Screenshot-Lastprice.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://amazing-torvalds-02adef.netlify.app",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/iamstanlee/last-price",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
      // {
      //   title: "Art gallery",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple art gallery website template",
      //   imgUrl: "assets/images/Screenshot-ArtGallery.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-art-gallery.vercel.app",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/Art-gallery",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },
    ],
  },

  socials: {
    tag: "socials",
    urls: [
      {
        icon: <EnvelopeSimple size={24} />,
        url: "mailto:rukkiechowe@gmail.com",
        title: "Email",
      },
      {
        icon: <LinkedinLogo size={24} />,
        url: "https://linkedin.com/in/rukkiechovwe",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={24} />,
        url: "https://twitter.com/rukkiechovwe",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={24} />,
        url: "https://github.com/rukkiechovwe",
        title: "Github",
      },
    ],
  },
};

export default app;
