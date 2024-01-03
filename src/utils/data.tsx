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
        companyName: "3RM",
        companyLink: "",
        duration: "November 2022 - May 2023",
        jobTitle: "Frontend Engineer",
        workDone: [
          "Collaborated closely with the backend, design, and product teams at 3RM in the  successful development of a cutting-edge web3 relationship manager, fostering efficient communication and organisational excellence within the company.",
          "Developed and maintained flawless integration of Telegram, into the company's website, introducing key features such as Telegram syncing, follow-up assignment, and conversation tracking.",
          "Ensured exceptional user experience by implementing responsive design techniques, ensuring cross - browser compatibility, and optimising mobile responsiveness.",
          "Teamed up closely with the design team at 3RM to transform mockups and wireframes into well polished, functional web pages, ensuring a seamless and visually appealing user experience.",
          "Optimised website performance through the application of advanced code optimization techniques and leveraging caching mechanisms, resulting in faster load times and improved overall user experience.",
          "Demonstrated remarkable efficiency and time management skills in a fully remote role, showcasing the ability to work autonomously and deliver high - quality results without the need for micro - management.",
        ],
      },
      {
        companyName: "Metadapp",
        companyLink: "",
        duration: "September 2021 - March 2023",
        jobTitle: "Frontend Developer",
        workDone: [
          "Led the development and successful implementation of critical features such as Risk Management, Portfolio Management, Referral System, and Revoke Approval within the Metadapp web3 application.",
          "Collaborated closely with the design, product, and backend teams to oversee and maintain the Metadapp web3 dashboard ensuring a seamless user experience and effective presentation of information.",
          "Integrated GraphQL APIs and various third - party services and web3 APIs elevating website functionality and enabling efficient data retrieval.Thereby enhancing overall user engagement. ",
          "Conducted rigorous testing and debugging protocols, swiftly identifying and resolving frontend codebase issues to ensure a resilient and error - free application.",
          "Worked closely with the customer success team, triaging, troubleshooting, and promptly resolving customer- facing issues.Provided technical support, guidance, and implemented effective solutions to maintain a high standard of customer satisfaction.",
          "Enhanced developer experience and code readability through eliminating redundancy, simplifying, and introducing reusable components for improved clarity and efficiency.",
        ],
      },
      // {
      //   companyName: "GreenTech",
      //   companyLink: "",
      //   duration: "September 2021 - April 2022",
      //   jobTitle: "Frontend Developer",
      //   workDone: [
      //     "Played a pivotal role in designing and implementing various features and functionalities, including API integrations, as part of the frontend development team.",
      //     "Collaborated closely with the design and product teams to create a professional and user-friendly consultancy website, ensuring a seamless user experience and effective presentation of information.",
      //     "Managed and maintained the Naija Kobo Market website, ensuring its smooth operation, regular updates, and adherence to design standards and guidelines.",
      //   ],
      // },
      // {
      //   companyName: "Kivifood",
      //   companyLink: "",
      //   duration: "May 2021 - February 2022",
      //   jobTitle: "Frontend Developer/UI Designer",
      //   workDone: [
      //     "Devised and implemented the Kivifood marketing website and conducted several experiments to drive growth and engagement.",
      //     "Worked together with the mobile team to design the Kivifood mobile app interface.",
      //   ],
      // },
      {
        companyName: "Xigma",
        companyLink: "",
        duration: "April 2021 - July 2021",
        jobTitle: "Frontend Developer Intern",
        workDone: [
          "Designed and developed the Xigma solar service website, contributing to its design and functionality to enhance user engagement and promote solar services effectively.",
          "Teamed up with the product team to design and refine the mobile interface.Ensured a seamless, user- friendly and visually appealing experience for mobile users accessing the Xigma solar service.",
          "Exhibited leadership qualities by initiating and leading a training program for a cohort of 10 interns, delivering a comprehensive introduction to frontend development.This endeavour contributed to fostering a collaborative learning environment and skill development within the team.",
        ],
      },
    ],
  },

  project: {
    tag: "project",
    deskTopProjects: [
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
        imgUrl: "assets/images/www.wano.finance_1.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://wano.finance/",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "MuqeeAI",
        tags: ["react", "nextJS", "tailwind"],
        desc: "Content creation on Autopilot.",
        imgUrl: "assets/images/Screenshot-Muqee.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://muqee.ai",
            tooltip: "View the web",
          },
        ],
      },

      {
        title: "kivifood",
        tags: ["react", "styled-component"],
        desc: "Get the food you want from the comfort of your home.",
        imgUrl: "assets/images/Screenshot-Kivi.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://kivifood.netlify.app/",
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
            url: "https://rukkies-adviceapp.netlify.app",
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
            url: "https://rukkies-ecommerce.netlify.app/",
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
        title: "lastprice",
        tags: ["react", "redux", "ant design"],
        desc: "Buy and sell products at discounted or slashed prices.",
        imgUrl: "assets/images/Screenshot-Lastprice.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://amazing-torvalds-02adef.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/iamstanlee/last-price",
            tooltip: "View on github",
          },
        ],
      },

      // {
      //   title: "Art gallery",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple art gallery website template",
      //   imgUrl: "assets/images/Screenshot-ArtGallery.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-art-gallery.netlify.app",
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
        title: "MuqeeAI",
        tags: ["react", "nextJS", "tailwind CSS"],
        desc: "Content creation on Autopilot.",
        imgUrl: "assets/images/Screenshot-Muqee.png",

        links: [
          {
            icon: <Globe size={24} />,
            url: "https://muqee.ai",
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
            url: "https://rukkies-ecommerce.netlify.app/",
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
        title: "kivifood",
        tags: ["react", "styled-component"],
        desc: "Get the food you want from the comfort of your home.",
        imgUrl: "assets/images/Screenshot-Kivi.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://kivifood.netlify.app/",
            tooltip: "View the web",
          },
        ],
      },
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
      //   title: "Icompresser",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Icompresser website",
      //   imgUrl: "assets/images/Screenshot-ImgCompresser.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://www.icompresser.com/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },

      {
        title: "lastprice",
        tags: ["react", "redux", "ant design"],
        desc: "Buy and sell products at discounted or slashed prices.",
        imgUrl: "assets/images/Screenshot-Lastprice.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://amazing-torvalds-02adef.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/iamstanlee/last-price",
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
            url: "https://rukkies-adviceapp.netlify.app",
            tooltip: "View the web",
          },

          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/rukkiechovwe/advice_app_vue3",
            tooltip: "View on github",
          },
        ],
      },

      // {
      //   title: "Art gallery",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple art gallery website template",
      //   imgUrl: "assets/images/Screenshot-ArtGallery.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-art-gallery.netlify.app",
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
