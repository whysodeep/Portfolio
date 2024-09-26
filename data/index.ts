export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b_id1.svg",   
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an e-commerce website",
      description: "Ongoing work:",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "A to-do list to keep me organized",
      des: "Built a simple to-do list app with features like adding, deleting, and marking tasks as completed.",
      img: "/tasker.png",
      iconLists: ["/html.png", "/js.png", "/css.jpg", "/react.jpg", "/tail.svg"],
      link: "https://github.com/whysodeep",
    },
    {
      id: 2,
      title: "Recipe Finder App",
      des: "An android app to search for recipes, save your favorite recipes, with pictures and.",
      img: "/Recipe.jpeg",
      iconLists: ["/next.svg", "/android.jpg", "/ios.jpg", "/java.png", "/js.png"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "A flappy bird game",
      des: "A really fun game build using JavaScript, save the bird and get points as you fly.",
      img: "/project3.svg",
      iconLists: ["/html.png", "/js.png", "/css.jpg", "/react.jpg", "/tail.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Building a website for the client",
      des: "Built a fully functional website for a client to help her non-profit organization.",
      img: "/project4.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/css.jpg", "/html.png"],
      link: "/ui.apple.com",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Raman consistently demonstrates a remarkable level of technical expertise and creativity. His ability to solve complex problems in innovative ways made him stand out in my classes. He is truly a driven and capable developer who is destined for success.",
      name: "Professor Emily Clarke",
      title: "Algonquin College",
    },
    {
      quote:
        "Raman's dedication to our project was unparalleled. He not only met every deadline but also ensured our project was delivered with exceptional quality. His commitment to achieving the best outcome and his collaborative spirit made him a pleasure to work with.",
      name: "David White",
      title: "Project Manager",
    },
    {
      quote:
        "Raman was a vital member of our software team. His leadership skills, attention to detail, and strong technical abilities made him a key player in delivering successful outcomes on every project. His positive attitude and determination consistently pushed our team forward.",
      name: "John Peters",
      title: "Software Developer",
    },
    {
      quote:
        "Working with Raman was an exceptional experience. He took the time to understand our business needs and translated them into a sleek, functional website. His professionalism and responsiveness made the entire process seamless and stress-free.",
      name: "Sarah",
      title: "Level-2 software dev team member",
    },
    {
      quote:
        "Raman's coding skills are top-notch, and his eagerness to learn new technologies made him a valuable asset to our team. His ability to troubleshoot and think critically under pressure contributed greatly to the success of our projects",
      name: "James Ford",
      title: "A LinkedIn recruiter",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Java",
      img: "/java.png",
      nameImg: "/java (1).png",
    },
    {
      id: 2,
      name: "MySQL",
      img: "/mysql.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "Python",
      img: "/python.png",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "JavaScript",
      img: "/js.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "Web Development",
      img: "/developer.png",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend developer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Software dev - Team Lead",
      desc: "Led a team for a software development project, enhancing my leadership skills and following agile.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Database software assistant",
      desc: "Assisted a data enginer to optimize and manage a database for a home-build company.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Freelance Java Workshop",
      desc: "Developed and maintained a simple Java application for using MVC and JDBC.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/whysodeep", 
    },
    
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/ramandeepsingh00/", 
    },
];
