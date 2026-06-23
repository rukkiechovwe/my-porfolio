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
  desc: "Rukkie's Portfolio and Resume",
  hero: {
    tag: "hero",
    name: "Ufuoma Oghenechovwe",
    catchPhrase: "Frontend Engineer",
    greeting: "Hey, I'm Rukkie",
    desc: "Currently @ ExodusAvia Group",
  },
  about: {
    tag: "about",
    name: "Ufuoma",
    bio: "I'm a frontend engineer with 4+ years of professional experience building scalable, high-performance, production-ready web applications across diverse industries using React, Next.js, TypeScript, and GSAP. I have a proven ability to seamlessly blend design with technical excellence, delivering polished, fully integrated products from concept to deployment. I pay great attention to detail. <p>I'm proficient and actively working with the tools and skillset listed below.<p/>",

    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "languages",
            data: ["javascript", "typescript"],
          },
          {
            name: "frameworks",
            data: ["reactJS", "nextJS", "GSAP", "redux-toolkit", "react-query"],
          },
          {
            name: "styling",
            data: ["tailwindCSS", "CSS3", "MUI", "framer-motion"],
          },
          {
            name: "tools",
            data: [
              "git",
              "github-actions",
              "vite",
              "webpack",
              "figma",
              "vercel",
              "REST APIs",
            ],
          },
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
        companyName: "ExodusAvia Group",
        companyLink: "",
        duration: "August 2025 - present",
        jobTitle: "Frontend Engineer",
        workDone: [
          "Led frontend development across a suite of 5 aviation management apps — restructured the architecture, replaced all mock data with live API integrations, and implemented authentication end-to-end in collaboration with the backend engineers.",
          "Integrated REST APIs across all apps covering real-time chat, push notifications, calendar and timeline views, role-based user management, and full CRUD operations.",
          "Iterated through multiple client demo cycles, progressively resolving bugs and hardening the platform toward airline onboarding readiness.",
          "Delivered consistent UI/UX improvements based on stakeholder feedback, maintaining design coherence across 5 distinct user-facing products.",
        ],
      },
      {
        companyName: "GoPrudy",
        companyLink: "",
        duration: "February 2025 - September 2025",
        jobTitle: "Frontend Engineer (Contract)",
        workDone: [
          "Built core frontend features for a budgeting SaaS platform with AI-driven financial dashboards, transaction tracking, and receipt scanning functionality.",
          "Improved UI performance and reduced data-fetching latency by 40% by migrating to React Query with smart caching and background sync strategies.",
          "Integrated AI features to enhance predictive financial analysis, delivering personalised spending insights to users.",
          "Implemented GSAP-powered micro-animations that enhanced perceived performance and overall product polish.",
        ],
      },
      {
        companyName: "Muzzlab Technologies",
        companyLink: "https://www.muzzlabtech.com/",
        duration: "July 2023 - January 2025",
        jobTitle: "Frontend Engineer",
        workDone: [
          "Developed a real-time car rental booking system with live inventory updates and payment gateway integration for Autogirl & Muvement.",
          "Built multi-step due diligence workflows (NDAs, payments, questionnaires) for GACN, automating previously manual processes and cutting admin task time by 60%.",
          "Collaborated with product and design stakeholders, iterating rapidly from Figma to production to deliver scalable frontend solutions across two major products.",
          "Drove code quality improvements by refactoring core modules and establishing component standards adopted across the team.",
        ],
      },
      {
        companyName: "3RM",
        companyLink: "",
        duration: "November 2022 - May 2023",
        jobTitle: "Frontend Engineer (Contract)",
        workDone: [
          "Built a scalable Telegram Relationship Manager for Web3 organizations, enabling real-time sync, follow-up assignment, and conversation tracking across thousands of chats.",
          "Translated Figma designs pixel-perfectly into responsive UIs, ensuring cross-browser compatibility and improving UX consistency across platforms.",
          "Boosted site load performance by 30% through aggressive caching and React code optimization.",
        ],
      },
      {
        companyName: "Metadapp",
        companyLink: "",
        duration: "June 2022 - March 2023",
        jobTitle: "Frontend Developer",
        workDone: [
          "Delivered core Web3 features: Risk Management, Portfolio Management, Referral System, and Revoke Approval within a live DeFi dashboard.",
          "Integrated GraphQL APIs, Web3 APIs, and third-party services to enable efficient on-chain data retrieval and real-time updates.",
          "Reduced bug reports by 30% through systematic legacy code refactoring and stricter TypeScript typings.",
        ],
      },
    ],
  },

  project: {
    tag: "project",
    deskTopProjects: [
      {
        title: "ExodusAvia",
        tags: ["react", "nextjs", "rest-api", "real-time", "NDA"],
        desc: "Suite of 5 aviation management apps — live API integrations, end-to-end auth, real-time chat & role-based access. Private, under NDA.",
        imgUrl: "assets/images/Screenshot-Exodusavia.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.exodusavia.com",
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
        title: "Caveat Emptor",
        tags: ["nextjs", "tailwind"],
        desc: "Vernacular Design Archive",
        imgUrl: "assets/images/Screenshot-Ceavetemptor.jpg",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.caveatemptorarchive.com/",
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
        title: "GoPrudy",
        tags: ["nextjs", "react-query", "GSAP", "AI"],
        desc: "AI-driven budgeting SaaS — financial dashboards, receipt scanning, and predictive spending insights.",
        imgUrl: "assets/images/Screenshot-Goprudy.png",
        links: [
          // {
          //   icon: <Globe size={24} />,
          //   url: "https://www.goprudy.com/",
          //   tooltip: "View the web",
          // },
        ],
      },

      // {
      //   title: "Wano.finance",
      //   tags: [
      //     "nextjs",
      //     "tailwind",
      //     "postgres",
      //     "metamask",
      //     "solidity",
      //     "layerzero",
      //     "infura",
      //     "truffle",
      //   ],
      //   desc: "Web3 omnichain payment infrastructure - Enhanced payment experience for 20M+ users in web3",
      //   imgUrl: "assets/images/Screenshot-Wano1.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://wano.finance/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },
      {
        title: "Still Practice",
        tags: ["nextjs", "tailwind"],
        desc: "Production Company",
        imgUrl: "assets/images/Screenshot-Stillpractice.jpg",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.stillpractice.com/",
            tooltip: "View the web",
          },
        ],
      },

      // {
      //   title: "Pocopay",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple business website template",
      //   imgUrl: "assets/images/Screenshot-Pocopay.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://pocopay-website.vercel.app/",
      //       tooltip: "View the web",
      //     },

      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/pocopay-website",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

      // {
      //   title: "Feastpass",
      //   tags: ["nextjs", "tailwind"],
      //   desc: "Your Cities Food Guide",
      //   imgUrl: "assets/images/Screenshot-Feastpass.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://www.feastpasshq.com/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },

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

      // {
      //   title: "RK-Store",
      //   tags: ["react", "styled-component"],
      //   desc: "An elegant ecommerce application.",
      //   imgUrl: "assets/images/Screenshot-RK-Store.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-ecommerce.vercel.app/",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/ecommerce",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

      // {
      //   title: "Fem GPT",
      //   tags: ["react", "tailwind", "AI"],
      //   desc: "Female health advisor",
      //   imgUrl: "assets/images/Screenshot-FemGPT.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://fem-gpt.vercel.app/",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/fem-gpt",
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
        title: "ExodusAvia",
        tags: ["react", "nextjs", "rest-api", "real-time", "NDA"],
        desc: "Suite of 5 aviation management apps — live API integrations, end-to-end auth, real-time chat & role-based access. Private, under NDA.",
        imgUrl: "assets/images/Screenshot-Exodusavia.png",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.exodusavia.com",
            tooltip: "View the web",
          },
        ],
      },
      {
        title: "GoPrudy",
        tags: ["nextjs", "react-query", "GSAP", "AI"],
        desc: "AI-driven budgeting SaaS — financial dashboards, receipt scanning, and predictive spending insights.",
        imgUrl: "assets/images/Screenshot-Goprudy.png",
        links: [
          // {
          //   icon: <Globe size={24} />,
          //   url: "https://www.goprudy.com/",
          //   tooltip: "View the web",
          // },
        ],
      },
      {
        title: "Caveat Emptor",
        tags: ["nextjs", "tailwind"],
        desc: "Vernacular Design Archive",
        imgUrl: "assets/images/Screenshot-Ceavetemptor.jpg",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.caveatemptorarchive.com/",
            tooltip: "View the web",
          },
        ],
      },
      {
        title: "Still Practice",
        tags: ["nextjs", "tailwind"],
        desc: "Production Company",
        imgUrl: "assets/images/Screenshot-Stillpractice.jpg",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://www.stillpractice.com/",
            tooltip: "View the web",
          },
        ],
      },
      // {
      //   title: "Feastpass",
      //   tags: ["nextjs", "tailwind"],
      //   desc: "Your Cities Food Guide",
      //   imgUrl: "assets/images/Screenshot-Feastpass.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://www.feastpasshq.com/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },

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

      // {
      //   title: "Wano.finance",
      //   tags: ["nextjs", "tailwind", "metamask"],
      //   desc: "Web3 omnichain payment infrastructure",
      //   imgUrl: "assets/images/Screenshot-Wano.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://wano.finance/",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },

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

      // {
      //   title: "Fem GPT",
      //   tags: ["react", "tailwind CSS", "AI"],
      //   desc: "Female health advisor",
      //   imgUrl: "assets/images/Screenshot-FemGPT.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://fem-gpt.vercel.app/",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/fem-gpt",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

      // {
      //   title: "RK-Store",
      //   tags: ["react", "styled-component"],
      //   desc: "An elegant ecommerce application.",
      //   imgUrl: "assets/images/Screenshot-RK-Store.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://rukkies-ecommerce.vercel.app/",
      //       tooltip: "View the web",
      //     },
      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/ecommerce",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

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

      // {
      //   title: "Pocopay",
      //   tags: ["HTML", "CSS", "JS"],
      //   desc: "Simple business website template",
      //   imgUrl: "assets/images/Screenshot-Pocopay.png",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://pocopay-website.vercel.app/",
      //       tooltip: "View the web",
      //     },

      //     {
      //       icon: <GithubLogo size={24} />,
      //       url: "https://github.com/rukkiechovwe/pocopay-website",
      //       tooltip: "View on github",
      //     },
      //   ],
      // },

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
