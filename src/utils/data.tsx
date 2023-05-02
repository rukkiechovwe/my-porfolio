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
            data: ["vuex", "redux"],
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
        companyName: "Metadapp",
        companyLink: "",
        duration: "September 2022 - Present",
        jobTitle: "Frontend Developer",
        workDone: [
          "Built and implemented several successful features such as Risk management, Portfolio management,Referral system and Revoke approval on Metadapp web3 application.",
          "Worked closely with design, product, and backend teams to oversee and maintain the Metadapp web3 dashboard.",
          "Worked closely with customer success team to triage, troubleshoot and resolve customer facing issues by providing technical support, guidance, and implementing solutions in a timely manner.",
        ],
      },
      {
        companyName: "GreenTech",
        companyLink: "",
        duration: "September 2021 - April 2022",
        jobTitle: "Frontend Developer",
        workDone: [
          "Involved in designing, implementing features and API integration.",
          "Collaborated closely with the design and product teams to create a professional, user-friendly consultancy website.",
          "Managed and maintained the Naija Kobo Market website.",
        ],
      },
      {
        companyName: "Kivifood",
        companyLink: "",
        duration: "May 2021 - February 2022",
        jobTitle: "Frontend Developer/UI Designer",
        workDone: [
          "Devised and implemented the Kivifood marketing website and conducted several experiments to drive growth and engagement.",
          "Worked together with the mobile team to design the Kivifood mobile app interface.",
        ],
      },
      {
        companyName: "Xigma",
        companyLink: "",
        duration: "April 2021 - July 2021",
        jobTitle: "Frontend Intern",
        workDone: [
          "Designed and developed the Xigma solar service website.",
          "Teamed up with the product team to design and make iterations on the mobile interface.",
          "Led a training program for a group of 10 interns, providing them with an in-depth introduction to frontend development.",
        ],
      },
    ],
  },

  project: {
    tag: "project",
    projects: [
      {
        title: "Fem GPT",
        tags: ["react", "TailwindCSS", "AI"],
        desc: "Female health advisor",
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
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://kivifood.netlify.app/",
            tooltip: "View the web",
          },
        ],
      },

      // {
      //   title: "lastprice",
      //   tags: ["react", "redux", "ant design"],
      //   desc: "Lastprice is an eccomerce platform where vendors can sell products at discounted or slashed prices.",
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
