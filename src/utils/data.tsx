import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  TwitterLogo,
  FilePdf,
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
    bio: "I'm a creative frontend developer with 2+years of experience in working with diverse and talented teams to deliver exceptional web experiences that are both visually appealing and technically demanding. I am also committed to staying current with the latest trends and technologies in web development.",

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
            data: ["reactjs", "vuejs", "nextjs", "nuxtjs"],
          },
          {
            name: "state-management",
            data: ["vuex", "redux"],
          },
          {
            name: "styling",
            data: ["CSS3", "styled-components", "tailwindcss", "MUI"],
          },

          {
            name: "database",
            data: ["firebase", "graphql"],
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

  project: {
    tag: "project",
    projects: [
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
      // {
      //   title: "Metadapp",
      //   tags: ["react", "MUI", "Web3"],
      //   desc: "An all in one Web3 dashboard",
      //   links: [
      //     {
      //       icon: <Globe size={24} />,
      //       url: "https://metadapp.com",
      //       tooltip: "View the web",
      //     },
      //   ],
      // },
      {
        title: "Art Gallery Template",
        tags: ["html", "Css3", "javascript"],
        desc: "A webite template artists can use to showcase their works.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://rukkies-art-gallery.netlify.app",
            tooltip: "View the web",
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

      {
        title: "lastprice",
        tags: ["react", "redux", "ant design"],
        desc: "Lastprice is an eccomerce platform where vendors can sell products at discounted or slashed prices.",
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
    ],
  },

  blog: {
    tag: "blog",
    blogs: [
      {
        title: "Leetcode #845 — Longest Mountain In Array",
        date: "DEC 24, 2021",
        text: "The leetcode #845 problem is a classical dynamic programming problem where we are asked to return the length of the longest mountain subarray from a given array. What is a mountain array? from the leetcode description, an array is a mountain array if it satisfies the following...",
        link: "https://medium.com/@iamstanlee/leetcode-845-longest-mountain-in-array-256202687979",
      },
    ],
  },
};

export default app;
