// Technologies
export const technologies = {
  next: "Next.js",
  react: "React.js",
  tailwind: "Tailwind CSS",
  ts: "TypeScript",
  js: "JavaScript",
  css: "CSS",
  html: "HTML",
  bootstrap: "Bootstrap",
  strapi: "Strapi",
  redux: "Redux Toolkit",
  api: "REST API",
};
const {
  next,
  react,
  tailwind,
  ts,
  js,
  css,
  html,
  bootstrap,
  strapi,
  redux,
  api,
} = technologies;
// Projects data
export const projects = [
  {
    id: "1",
    title: "Restaurant",
    repo: "https://github.com/ibrahimhassona/restaurant",
    live: "https://restaurant-lac-psi.vercel.app/",
    img: "/restaurant.PNG",
    create_at: "2023-12-15",
    tech: [next, react, tailwind, ts, redux],
    desc: "This is a restaurant's website where you can browse the menu, remotely reserve a table, and even place a food order for home delivery. The website is responsive and compatible with all screen sizes.",
  },
  {
    id: "2",
    title: "Travel",
    repo: "https://github.com/ibrahimhassona/travel",
    live: "https://travel-lac-psi.vercel.app/",
    img: "/travel.PNG",
    create_at: "2024-01-18",
    tech: [next, react, tailwind, ts],
    desc: "This website is an electronic platform for a tourism company, showcasing its products and prices. The site is responsive and operates efficiently across all screens.",
  },
  {
    id: "3",
    title: "Full Stack Tech Store with Strapi",
    repo: "https://github.com/ibrahimhassona/tech-store_frontend",
    live: "https://github.com/ibrahimhassona/tech-store_backend",
    img: "/hassouna-store.PNG",
    create_at: "2023-10-31",
    tech: [next, react, tailwind, ts, api, redux, strapi],
    desc: "E-commerce Hassouna Tech Store, This website is an online store where you can add the products you want to purchase to the shopping cart with the desired quantity. You can then proceed to confirm the order or make modifications. Additionally, the website suggests products that are similar or related to the selected item. The website is programmed with both front-end and back-end development.",
  },
  {
    id: "4",
    title: "Prayer times for some Egyptian cities",
    repo: "https://github.com/ibrahimhassona/times-pray",
    live: "https://ibrahimhassona.github.io/times-pray/",
    img: "/timing-prayer.PNG",
    create_at: "2023-07-24",
    tech: [html, css, js, api],
    desc: "Web application for times pray in some of egypt cities time , depend on API & Vanilla JavaScript without any library",
  },
  {
    id: "5",
    title: "IBHS Portfolio",
    repo: "https://github.com/ibrahimhassona/ibhs",
    live: "https://ibhs.vercel.app/",
    img: "/ibhs.PNG",
    create_at: "2024-02-02",
    tech: [next, ts, tailwind, react, api],
    desc: "My personal portfolio was created to showcase my programming skills and projects in the field of front-end development .",
  },
  {
    id: "6",
    title: "bootstrap Template",
    repo: "https://github.com/ibrahimhassona/bootstrap_one",
    live: "https://ibrahimhassona.github.io/bootstrap_one/",
    img: "/bootstrap_one.PNG",
    create_at: "2022-08-08",
    tech: [html, css, bootstrap],
    desc: "A responsive website utilizing the Bootstrap framework as its sole technology.",
  },
  {
    id: "7",
    title: "Basic Template",
    repo: "https://github.com/ibrahimhassona/elzero.github.io",
    live: "https://ibrahimhassona.github.io/elzero.github.io/",
    img: "/basic.PNG",
    create_at: "2022-02-20",
    tech: [html, css, js],
    desc: "A website showcasing the beginner level of fundamental web technologies. It is responsive and very well designed.",
  },
  {
    id: "8",
    title: "Kasper Template",
    repo: "https://github.com/ibrahimhassona/kasperdesign.github.io",
    live: "https://ibrahimhassona.github.io/kasperdesign.github.io/",
    img: "/kasper.PNG",
    create_at: "2022-01-02",
    tech: [html, css],
    desc: "A website showcasing the beginner level of fundamental web technologies. It is responsive and very well designed.",
  },
  {
    id: "9",
    title: "Construction Company",
    repo: "https://github.com/ibrahimhassona/construction",
    live: "https://ibrahimhassona.github.io/construction/",
    img: "/consraction.PNG",
    create_at: "2023-09-19",
    tech: [html, css, js],
    desc: "A responsive website for a construction company showcasing the company's projects, the services it offers, and a contact form, Vanilla JavaScript without any library",
  },
];

// [
 
//   {
//     "id": "2",
//     "title": "Travel",
//     "repo": "https://github.com/ibrahimhassona/travel",
//     "live": "https://travel-lac-psi.vercel.app/",
  
//     "create_at": "2024-01-18",
//     "tech": ["next", "react", "tailwind", "ts"],
//     "desc": "This website is an electronic platform for a tourism company, showcasing its products and prices. The site is responsive and operates efficiently across all screens."
//   },
//   {
//     "id": "3",
//     "title": "Full Stack Tech Store with Strapi",
//     "repo": "https://github.com/ibrahimhassona/tech-store_frontend",
//     "live": "https://github.com/ibrahimhassona/tech-store_backend",
    
//     "create_at": "2023-10-31",
//     "tech": ["next", "react", "tailwind", "ts", "api", "redux", "strapi"],
//     "desc": "E-commerce Hassouna Tech Store, This website is an online store where you can add the products you want to purchase to the shopping cart with the desired quantity. You can then proceed to confirm the order or make modifications. Additionally, the website suggests products that are similar or related to the selected item. The website is programmed with both front-end and back-end development."
//   },
//   {
//     "id": "4",
//     "title": "Prayer times for some Egyptian cities",
//     "repo": "https://github.com/ibrahimhassona/times-pray",
//     "live": "https://ibrahimhassona.github.io/times-pray/",
    
//     "create_at": "2023-07-24",
//     "tech": ["html", "css", "js", "api"],
//     "desc": "Web application for times pray in some of Egypt cities time, depend on API & Vanilla JavaScript without any library"
//   },
//   {
//     "id": "5",
//     "title": "IBHS Portfolio",
//     "repo": "https://github.com/ibrahimhassona/ibhs",
//     "live": "https://ibhs.vercel.app/",
   
//     "create_at": "2024-02-02",
//     "tech": ["next", "ts", "tailwind", "react", "api"],
//     "desc": "My personal portfolio was created to showcase my programming skills and projects in the field of front-end development."
//   },
//   {
//     "id": "6",
//     "title": "bootstrap Template",
//     "repo": "https://github.com/ibrahimhassona/bootstrap_one",
//     "live": "https://ibrahimhassona.github.io/bootstrap_one/",
   
//     "create_at": "2022-08-08",
//     "tech": ["html", "css", "bootstrap"],
//     "desc": "A responsive website utilizing the Bootstrap framework as its sole technology."
//   },
//   {
//     "id": "7",
//     "title": "Basic Template",
//     "repo": "https://github.com/ibrahimhassona/elzero.github.io",
//     "live": "https://ibrahimhassona.github.io/elzero.github.io/",
//     "img": "/basic.PNG",
//     "create_at": "2022-02-20",
//     "tech": ["html", "css", "js"],
//     "desc": "A website showcasing the beginner level of fundamental web technologies. It is responsive and very well designed."
//   },
//   {
//     "id": "8",
//     "title": "Kasper Template",
//     "repo": "https://github.com/ibrahimhassona/kasperdesign.github.io",
//     "live": "https://ibrahimhassona.github.io/kasperdesign.github.io/",
    
//     "create_at": "2022-01-02",
//     "tech": ["html", "css"],
//     "desc": "A website showcasing the beginner level of fundamental web technologies. It is responsive and very well designed."
//   },
//   {
//     "id": "9",
//     "title": "Construction Company",
//     "repo": "https://github.com/ibrahimhassona/construction",
//     "live": "https://ibrahimhassona.github.io/construction/",
    
//     "create_at": "2023-09-19",
//     "tech": ["html", "css", "js"],
//     "desc": "A responsive website for a construction company showcasing the company's projects, the services it offers, and a contact form, Vanilla JavaScript without any library."
//   }
// ]
