import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const BlogsData = [
  {
    id: 1,
    find: 'what_is_sanity',
    blog: {
      imgSrc: "/blog_images/what_is_sanity.png",
      title: "What is Sanity?",
      url: '/blog/what_is_sanity',
      summary: `Sanity delivers content anywhere (just like a headless CMS).
      Beyond that, Sanity gives you total composability. A fully decoupled, real-time content back end. Entirely customizable content workspaces. Be ready for what's next.`,

      description: `A friend of mine writes daily, “This Week At Work…” blogs about what he learned at work. I always find his articles to be insightful. He inspired me to do the same.

      Last week, I dove into Next.js. What is Next.js and why do we use it? I wanted to build a recipe app, most of my starter apps involve food. My research of Next.js brought me to Sanity.io.
      
      Sanity is a great CMS team tool that one can use internally as well as externally for clients. My next blog will focus on Next.js while this blog will be on Sanity.
      
      Let’s take a look at what Sanity provides.
      
      I implemented Sanity as my back-end using localhost:3333 while my Next.js lives on localhost:3000.

      Sanity allows you to build out your data and has the capability of editing images right on the interface. This eliminates a lot of time styling an image.

      For text values, you have the ability to style text or use a simple text box, which limits styling. This can then get implemented through schemas in your Next.js application. This all takes place on an interface called, Sanity studio.
      `,
      urls: [
        {
          name: "",
          url: "",
        },
        {
          name: "",
          url: "",
        },
        {
          name: "",
          url: "",
        },
      ],
      socialLink: [
        {
          id: 1,
          url: "https://instagram.com/rehan_._cr",
          icon: <FaInstagram />,
        },
        {
          id: 2,
          url: "https://github.com/rehanulHaque",
          icon: <FaGithub />,
        },
        {
          id: 3,
          url: "https://twitter.com/MdRehan_CR",
          icon: <FaTwitter />,
        },
        {
          id: 4,
          url: "https://www.linkedin.com/in/mdrehanulhaque1/",
          icon: <FaLinkedin />,
        },
      ],
    },
  },
  {
    id: 2,
    find: 'what_is_react',
    blog: {
      imgSrc: "/blog_images/what_is_reactjs.png",
      title: "What is React?",
      url: '/blog/what_is_react',
      summary: `Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.`,

      description: `The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.

      In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.  
      
      React’s primary role in an application is to handle the view layer of that application just like the V in a model-view-controller (MVC) pattern by providing the best and most efficient rendering execution. Rather than dealing with the whole user interface as a single unit, React.js encourages developers to separate these complex UIs into individual reusable components that form the building blocks of the whole UI. In doing so, the ReactJS framework combines the speed and efficiency of JavaScript with a more efficient method of manipulating the DOM to render web pages faster and create highly dynamic and responsive web applications.`,
      urls: [
        {
          name: "",
          url: "",
        },
        {
          name: "",
          url: "",
        },
        {
          name: "",
          url: "",
        },
      ],
      socialLink: [
        {
          id: 1,
          url: "https://instagram.com/rehan_._cr",
          icon: <FaInstagram />,
        },
        {
          id: 2,
          url: "https://github.com/rehanulHaque",
          icon: <FaGithub />,
        },
        {
          id: 3,
          url: "https://twitter.com/MdRehan_CR",
          icon: <FaTwitter />,
        },
        {
          id: 4,
          url: "https://www.linkedin.com/in/mdrehanulhaque1/",
          icon: <FaLinkedin />,
        },
      ],
    },
  },
  
];
