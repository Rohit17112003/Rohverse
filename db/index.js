const navigationTab = [
  {
    tab: "HOME",
    path: "/",
  },
  {
    tab: "WORKS",
    path: "my-works",
  },
  {
    tab: "ABOUT ME",
    path: "/about-me",
  },
  {
    tab: "CONTACT",
    path: "/?action=contact",
  },
  {
    tab: "MY CV",
    path: "../Assets/Rohit_Rana_Resume.pdf",
  },
];

const projects = [
  {
    id: "PRJ1",
    thumbnail: "/Assets/rgc.jpeg",
    name: "moto finder",
    des: "Leading online automotive marketplace in India.",
    tech: ["React Js", "Tailwind Css", "Next Js.", "Node Js"],
    liveURL: "https://mymotofinder.com/",
    github: "",
  },
  {
    id: "PRJ2",
    thumbnail: "/Assets/rgc.jpeg",
    name: "express tributes",
    des: "Create An Obituary, In Less Than A Minute!",
    tech: ["React Js", "Tailwind Css", "Next Js.", "Node Js", "Cropper js."],
    liveURL: "https://expresstributes.cybertize.in/",
    github: "",
  },
  {
    id: "PRJ1646ui",
    thumbnail: "/Assets/rgc.jpeg",
    name: "RGC",
    des: "Ranchi Gymkhana Club, one of most prestigious Clubs in the City.",
    tech: ["React Js", "Bootstrap", "Next Js.", "Node Js", "REST API", "Yup"],
    liveURL: "https://www.ranchigymkhanaclub.com/",
    github: "",
  },
  {
    id: "PRJ164ry6t5ui",
    thumbnail: "/Assets/yellona.jpeg",
    name: "YELLONA",
    des: "Online shopping store.",
    tech: [
      "React Js",
      "Tailwind CSS",
      "Next Js.",
      "Node Js",
      "REST API",
      "Yup",
      "REDUX",
      "CONTEXT",
    ],
    liveURL: "https://www.yellona.com/",
    github: "",
  },
  {
    id: "PRJ1",
    thumbnail: "/Assets/rgc.jpeg",
    name: "mankavit law academy",
    des: "Online CLAT, AILET, ILICAT, DU LL.M Coaching.",
    tech: ["React Js", "Bootstrap", "Next Js.", "Node Js"],
    liveURL: "https://classic.mankavit.com/",
    github: "",
  },
];

const smallProjects = [
  {
    id: "SPRJ1",
    name: "Firebase Auth",
    des: "Authentication using firebase.",
    tech: ["HTML5", "CSS3", "React Js", "REST API"],
    liveURL: "https://firebase-auth-e6mtuhyfe-survi1508.vercel.app/",
    github: "https://github.com/SURVI1508/firebase-auth",
  },
  {
    id: "SPRJ144",
    name: "IT Company Landing Page",
    des: "Better Insights For Business Growth",
    tech: ["Tailwind CSS", "React Js", "Framer Motion"],
    liveURL: "https://hrms-website.vercel.app/",
    github: "https://github.com/SURVI1508/hrms-website",
  },
  {
    id: "SPRJ14644",
    name: "Kalash Student housing",
    des: "Rental website for students",
    tech: ["Bootstrap", "Next Js", "Context"],
    liveURL: "https://kalash-housing.vercel.app",
    github: "https://github.com/SURVI1508/kalash",
  },
  {
    id: "SPRJ2",
    name: "Artist Dashboard",
    des: "Static Dashboard UI",
    tech: ["HTML5", "Tailwind Css", "React Js", "Framer motion"],
    liveURL: "https://artist-dasboard-react.vercel.app",
    github: "https://github.com/SURVI1508/artist-dasboard-react",
  },
  {
    id: "SPRJ3",
    name: "Go Train",
    des: "Search Your Train Powered by GP Bhaga",
    tech: ["HTML5", "Tailwind Css", "Next Js", "REST API", "Rapid API"],
    liveURL: "https://wmt-beta.vercel.app",
    github: "https://github.com/SURVI1508/WMT",
  },
  {
    id: "SPRJ4",
    name: "Tech News",
    des: "Search Tech News",
    tech: ["CSS3", "React Js", "REST API", "Rapid API", "REDUX"],
    liveURL: "https://technews-jjm989f3g-survi1508.vercel.app",
    github: "https://github.com/SURVI1508/NEWS",
  },
  {
    id: "SPRJ5",
    name: "Unacademy Web page",
    des: "A IIT-JEE Static page (clone)",
    tech: ["CSS3", "React Js", "Next Js"],
    liveURL: "https://udemy-orpin.vercel.app/",
    github: "https://github.com/SURVI1508/Udemy",
  },
  {
    id: "SPRJ6",
    name: "Github User's",
    des: "Search Github User by user name",
    tech: ["CSS3", "React Js", "Next Js", "Github API", "Context"],
    liveURL: "https://gitusersproject.vercel.app/",
    github: "https://github.com/SURVI1508/githubUsers",
  },
  {
    id: "SPRJ7",
    name: "Logistic Landing Page",
    des: "SHIP ANYTHING AROUND THE WORLD",
    tech: ["Next Js"],
    liveURL: "https://logistic-xi.vercel.app/",
    github: "",
  },
];

const skills = [
  {
    name: "Languages",
    tech: ["JavaScript", "HTML", "TypeScript", "JAVA", "C", "C++"],
  },
  {
    name: "Databases",
    tech: ["mongo DB", "SQL"],
  },
  {
    name: "Tools",
    tech: ["Git", "VSCode", "Figma"],
  },
  {
    name: "Frameworks",
    tech: [
      "React Js",
      "Next Js",
      "Node Js",
      "Tailwind Css",
      "shadcn/ui",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    name: "Others",
    tech: ["CSS", "REST API", "Cropper Js", "Firebase"],
  },
];

const funFacts = [
  "I like winter more than summer",
  "I often car with my friends",
  "I like veg biryani and sweets",
  "My favorite movie is The Green Mile",
  "I love development",
  "I want to visit new place",
];

const socialLink = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 496 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
      </svg>
    ),
    url: "https://github.com/Rohit17112003",
    name: "github",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
      </svg>
    ),
    url: "https://www.linkedin.com/in/Rohit Here Input User Name",
    name: "linked in",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
      </svg>
    ),
    url: "https://twitter.com/Rohit Here Input User Name",
    name: "twitter",
  },
];

export { navigationTab, projects, skills, funFacts, socialLink, smallProjects };
