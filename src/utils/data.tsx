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
    catchPhrase: "Rukkie",
    text: "I'm",
    greeting: "Hello there",
    desc: "<> Front-end developer </>",
  },
  about: {
    tag: "about",
    name: "Ufuoma",
    bio: "As a frontend developer, I possess a creative mindset that allows me to design visually appealing websites, with great attention to detail. I have collaborated with talented people to deliver exceptional web products that are both aesthetically pleasing and technically demanding. <p> My foremost priority is delivering outstanding results that exceed the expectations of my clients and employers. I'm proficient and actively working with the tools and skillset listed below.<p/>",

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
        duration: "November 2022 - April 2023",
        jobTitle: "Frontend Engineer",
        workDone: [
          "Collaborated closely with the design, product, and backend teams at 3RM to successfully build a web3 relationship manager, facilitating efficient communication and organisation within the company.",
          " Developed and maintained seamless integration of Telegram, into the company's website.Implemented key features including Telegram syncing, assigning follow - ups and tracking conversations.",
          "Ensured exceptional user experience by implementing responsive design techniques, ensuring cross-browser compatibility, and optimising mobile responsiveness.",
          "Collaborated closely with the design team at 3RM to transform mockups and wireframes into polished, functional web pages, ensuring a seamless and visually appealing user experience.",
          "Optimised website performance by implementing advanced code optimization techniques and leveraging caching mechanisms, resulting in faster load times and improved overall user experience.",
          "Proactively stayed up-to-date with the latest frontend development trends and technologies, actively seeking opportunities to enhance skills and contribute innovative ideas to the team's success at 3RM.",
        ],
      },
      {
        companyName: "Metadapp",
        companyLink: "",
        duration: "September 2022 - March 2023",
        jobTitle: "Frontend Developer",
        workDone: [
          "Built and implemented several successful features such as Risk management, Portfolio management,Referral system and Revoke approval on Metadapp web3 application.",
          "Worked together with design, product, and backend teams to oversee and maintain the Metadapp web3 dashboard.",
          "Integrated various APIs and third-party services to enhance website functionality and enable efficient data retrieval.",
          "Conducted thorough testing and debugging to identify and fix any issues or bugs in the frontend codebase.",
          "Worked closely with customer success team to triage, troubleshoot and resolve customer facing issues by providing technical support, guidance, and implementing solutions in a timely manner.",
        ],
      },
      {
        companyName: "GreenTech",
        companyLink: "",
        duration: "September 2021 - April 2022",
        jobTitle: "Frontend Developer",
        workDone: [
          "Played a pivotal role in designing and implementing various features and functionalities, including API integrations, as part of the frontend development team.",
          "Collaborated closely with the design and product teams to create a professional and user-friendly consultancy website, ensuring a seamless user experience and effective presentation of information.",
          "Managed and maintained the Naija Kobo Market website, ensuring its smooth operation, regular updates, and adherence to design standards and guidelines.",
        ],
      },
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
          "Designed and developed the Xigma solar service website.",
          "Teamed up with the product team to design and iterate on the mobile interface, ensuring a user-friendly and visually appealing experience for mobile users accessing the Xigma solar service.",
          "Demonstrated leadership skills by spearheading a training program for a group of 10 interns, delivering a comprehensive introduction to frontend development.",
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
          "supabase",
          "postgres",
          "metamask",
          "solidity",
          "layerzero",
          "infura",
          "truffle",
        ],
        desc: "Web3 omnichain payment infrastructure - Enhanced payment experience for 20M+ users in web3",
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
        desc: "Kivifood is a platform where customers can get the food they want from the comfort of their homes.",
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
        desc: "Lastprice is an eccomerce platform where vendors can sell products at discounted or slashed prices.",
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
        tags: [
          "nextjs",
          "tailwind",
          "supabase",
          "postgres",
          "metamask",
          "solidity",
          "layerzero",
          "infura",
          "truffle",
        ],
        desc: "Web3 omnichain payment infrastructure - Enhanced payment experience for 20M+ users in web3",
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
        desc: "Kivifood is a platform where customers can get the food they want from the comfort of their homes.",
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
        desc: "Lastprice is an eccomerce platform where vendors can sell products at discounted or slashed prices.",
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
