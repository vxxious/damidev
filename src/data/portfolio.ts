export type Project = {
  slug: string;
  title: string;
  discipline: string;
  summary: string;
  introduction?: string;
  scope: string;
  stack: string[];
  details?: { heading: string; body: string }[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "ourbank",
    title: "OurBank",
    discipline: "Product interface · Web and mobile",
    summary: "A virtual USD card prototype with account, card, and transaction interfaces.",
    introduction:
      "OurBank explores a card product for payments to services that are difficult to access with Nigerian bank cards. Public repositories show a web interface and a companion Expo application.",
    scope: "React and TypeScript web interface, plus a separate Expo mobile application.",
    stack: ["React", "TypeScript", "Vite", "Redux Toolkit", "Expo", "React Native"],
    details: [
      {
        heading: "Web interface",
        body: "The frontend includes sign-in and sign-up forms, protected routes, card creation UI, and a transaction view.",
      },
      {
        heading: "Mobile companion",
        body: "The Expo repository includes account, card, profile, and transaction routes. The project is presented as a prototype rather than a live financial service.",
      },
      {
        heading: "Prototype scope",
        body: "The public code covers the web and mobile interfaces. The project is presented as an interface prototype, with no claim of live payment operations.",
      },
    ],
    links: [
      { label: "Live web prototype", href: "https://ourbank-frontend.onrender.com/" },
      { label: "Web repository", href: "https://github.com/damilola1ade/ourbank-frontend" },
      { label: "Mobile repository", href: "https://github.com/damilola1ade/ourbank-app" },
    ],
  },
  {
    slug: "metaversus",
    title: "Metaversus",
    discipline: "Earlier work · Landing page",
    summary: "An animated landing page built to practice interface motion.",
    scope: "Next.js interface with Framer Motion and Tailwind CSS.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    links: [
      { label: "Live site", href: "https://metaverse1.netlify.app/" },
      { label: "GitHub repository", href: "https://github.com/damilola1ade/metaversus" },
    ],
  },
  {
    slug: "cryptoworld",
    title: "CryptoWorld",
    discipline: "Earlier work · Data application",
    summary: "A cryptocurrency information and news app using RapidAPI data.",
    scope: "React interface with Ant Design and Chart.js visualizations.",
    stack: ["React", "Ant Design", "Chart.js", "RapidAPI"],
    links: [
      { label: "Live site", href: "https://cryptoworld2022.netlify.app/" },
      { label: "GitHub repository", href: "https://github.com/damilola1ade/cryptoworld" },
    ],
  },
  {
    slug: "mykrypt",
    title: "MyKrypt",
    discipline: "Earlier work · Web3 demo",
    summary: "An Ethereum transfer demo built around MetaMask and the former Goerli test network.",
    scope: "Vite frontend with Tailwind CSS, ethers.js, and Hardhat.",
    stack: ["Vite", "Tailwind CSS", "ethers.js", "Hardhat"],
    links: [
      { label: "Archived demo", href: "https://mykryptlive.netlify.app/" },
      { label: "GitHub repository", href: "https://github.com/damilola1ade/mykrypt" },
    ],
  },
  {
    slug: "realtor",
    title: "Realtor",
    discipline: "Earlier work · Property website",
    summary: "A real estate listings interface using Bayut data through RapidAPI.",
    scope: "Next.js frontend with Chakra UI and Axios.",
    stack: ["Next.js", "Chakra UI", "Axios", "RapidAPI"],
    links: [
      { label: "Live site", href: "https://realtor.vercel.app/" },
      { label: "GitHub repository", href: "https://github.com/damilola1ade/realtor" },
    ],
  },
];

export const experience = [
  {
    company: "Freelance",
    title: "Full-Stack Engineer",
    period: "2020 to present",
    description: "Independent web application work across interface and backend development.",
  },
  {
    company: "Tensfer",
    title: "Lead Software Engineer",
    period: "2022 to 2024",
    description: "Worked on the dashboard, an account integration widget, API documentation, and the company website.",
  },
  {
    company: "Revolut",
    title: "Junior Software Engineer",
    period: "2020 to 2021",
    description: "Worked on web interfaces, testing, and REST API implementation.",
  },
];

export type Article = {
  title: string;
  href: string;
  date: string;
  displayDate: string;
  topic: string;
};

export const articles: Article[] = [
  {
    title: "Leverage Google Gemini AI to summarize documents in NestJS",
    href: "https://medium.com/@adegbemile/leverage-google-gemini-ai-to-summarize-documents-in-nestjs-44c436053d35",
    date: "2025-01-26",
    displayDate: "Jan 2025",
    topic: "NestJS / AI",
  },
  {
    title: "Uploading files in NestJS using AWS S3 SDK and Multer",
    href: "https://medium.com/@adegbemile/uploading-files-in-nestjs-using-aws-s3-sdk-and-multer-57359ee2b92c",
    date: "2024-12-15",
    displayDate: "Dec 2024",
    topic: "NestJS / Storage",
  },
  {
    title: "Real-time notifications with NestJS, React and Redux Toolkit Query",
    href: "https://medium.com/@adegbemile/real-time-notifications-with-nestjs-react-and-redux-toolkit-query-7fc278b876b3",
    date: "2024-11-05",
    displayDate: "Nov 2024",
    topic: "NestJS / React",
  },
  {
    title: "Fly.io CORS error fix with Node.JS, PostgreSQL, Prisma ORM and Supabase",
    href: "https://medium.com/@adegbemile/fly-io-cors-error-fix-with-node-js-postgresql-prisma-orm-and-supabase-c19627b38833",
    date: "2024-07-27",
    displayDate: "Jul 2024",
    topic: "Node.js / PostgreSQL",
  },
  {
    title: "How to create a Table Of Contents in React and Strapi rich text editor",
    href: "https://medium.com/@adegbemile/how-to-create-a-table-of-contents-in-react-and-strapi-rich-text-editor-1a6ff7b4d10e",
    date: "2024-06-03",
    displayDate: "Jun 2024",
    topic: "React / Strapi",
  },
];
