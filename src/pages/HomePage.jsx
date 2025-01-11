import React from "react";
import { Link, redirect } from "react-router-dom";
import { RefreshCcw, MonitorSmartphone, Rocket, LaptopMinimal, Server, Database, Network, HardDriveUpload, Layout, Calendar, Cross, BriefcaseBusiness, Pizza, Building, ListTodo, Mail, GithubIcon, Linkedin, Twitter } from "lucide-react";
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
import point from "../assets/images/point.jpg";

const HeroSection = () => (
  <div className="Home md:min-h-[88vh] mt-10 lg:mt-0 flex flex-col justify-center items-center max-w-full">
    <div className="flex flex-col items-center text-center animate-fadeInUp">
      <div className="text-secondary text-2xl font-semibold mb-2 font-mono">RUPESH SAHA</div>
      <div className="sm:text-7xl text-5xl font-bold text-gray-700 mb-4 flex flex-col ">
        <span>I am a FullStack</span>
        <span>Web Developer</span>
      </div>
      <button 
      onClick={()=>{
        const element = document.querySelector(".About")
        element.scrollIntoView({ behavior: 'smooth' });
      }}
      className="px-6 py-3 font-medium bg-secondary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        GET STARTED
      </button>
    </div>
  </div>
);

const PerksSection = () => {
  const perks = [
    { Icon: Rocket, title: "Fast", description: "Blazing fast loading time and lag-free interaction are my highest priority." },
    { Icon: MonitorSmartphone, title: "Responsive", description: "All websites are compatible with all screen sizes (Mobile, Laptop & Desktop)." },
    { Icon: RefreshCcw, title: "Dynamic", description: "I love making pages come to life with dynamic content." }
  ];

  return (
    <div className="grid grid-cols-12 p-4 gap-5">
      <div className="lg:col-span-2 "></div>
      <div className="lg:col-span-8 col-span-12 grid grid-cols-1 md:grid-cols-3 gap-5 border-b-2 border-secondary pb-12">
        {perks.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="sm:border-primary hover:border-secondary border-2  border-secondary p-8 rounded-md bg-gray-100 text-left flex flex-col gap-4 duration-500 shadow-md"
          >
            <Icon size={42} style={{ color: "var(--secondary-color)" }} />
            <h2 className="text-2xl font-bold border-b-secondary border-b-2 py-2">{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div className="lg:col-span-2 "></div>
    </div>
  );
};

const AboutSection = () => {
  const aboutItems = [
    { img: point, title: "I am Rupesh Saha", description: "A Fullstack Web Developer based in Purnia. I develop attractive and user-friendly websites to help my clients reach their customers. The websites are blazing fast, highly secure, fully responsive, and completely personalizedto best suit your business requirements.", span: "md:col-span-3" },
    { img: about1, title: "Always on Time", description: "On time website delivery", span: "md:col-span-1" },
    { img: about2, title: "Competitive Pricing", description: "Best in market prices", span: "md:col-span-2" },
    { img: about3, title: "Professional Website", description: "Top Notch Quality Websites", span: "md:col-span-2" },
    { img: about4, title: "Clean Code", description: "Bug-free and maintainable products", span: "md:col-span-1" },
  ];

  return (
    <div className="p-4 About">
      <div className="grid grid-cols-12 lg:p-4 p-0 gap-4">
        <div className="lg:col-span-2 "></div>
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-b-2 border-secondary pb-12">
          <h2 className="text-3xl font-bold mb-4 col-span-3 text-secondary">About me</h2>
      

          {aboutItems.map(({ img, title, description, span }, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-md col-span-3 ${span} h-80 overflow-hidden`}
              style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-end p-4 gap-2">
                <span className="text-white text-2xl font-bold">{title}</span>
                <span className="text-white">{description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 "></div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive and user-friendly interfaces using modern frameworks like React, Vue, or Angular.",
      Icon: LaptopMinimal
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with technologies like Node.js, Express, and Django.",
      Icon: Server
    },
    {
      title: "Database Management",
      description: "Designing and managing databases with systems like MySQL, PostgreSQL, and MongoDB.",
      Icon: Database
    },
    {
      title: "API Development",
      description: "Developing RESTful and GraphQL APIs for seamless communication between frontend and backend systems.",
      Icon: Network
    },
    {
      title: "DevOps and Deployment",
      description: "Ensuring smooth deployment and CI/CD pipelines using Docker, Kubernetes, and cloud services.",
      Icon: HardDriveUpload
    },
    {
      title: "UI/UX Design Integration",
      description: "Integrating intuitive designs and optimizing user experience for web applications.",
      Icon: Layout
    }
  ];

  return (
    
      <div className="grid grid-cols-12 Services md:p-0 p-4 ">
        <div className="md:col-span-2 "></div>
        <div className="md:col-span-8 col-span-12 grid grid-cols-3 gap-4 border-b-2 border-secondary pb-12">
          <h1 className="text-3xl font-bold mb-4 col-span-3 text-secondary">My Services</h1>
        {services.map(({title, description, Icon},index)=>(
          <div key={index} className="md:col-span-1 col-span-3 rounded-md hover:border-secondary hover:scale-105 hover:shadow-2xl duration-300 border-2 p-4 shadow-md bg-gray-100 gap-4">
            <Icon size={42} style={{ color: "var(--secondary-color)",marginBottom: "2rem" }} />
            <h1 className="text-2xl font-bold border-b-secondary border-b-2 py-2 mb-4"> { title } </h1>
            <h1> { description } </h1>
          </div>
        ))}
        </div>
        <div className="md:col-span-2"></div>
      </div>
    
  )
  
}

const WorksSection = () => {
  const works = [
    {
      title: "Eventide",
      description: "An Event Creator Calendar App is a user-friendly web application built using React and TailwindCSS that allows users to manage their events effectively.",
      Icon: Calendar
    },
    {
      title: "MediFirst",
      description: "A Doctor Appointment Booking Website, a seamless platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to help patients easily schedule appointments with doctors.",
      Icon: Cross
    },
    {
      title: "JobHunt",
      description: "A Job Search App that scrapes data from another website. It uses React and Tailwind in the frontend, Express in the Backend, MongoDB as the Database and Pupeeter as the web scraper.",
      Icon: BriefcaseBusiness
    },
    {
      title: "Food-Del",
      description: "A food delivery website frontend made using React and TailwindCSS",
      Icon: Pizza
    },
    {
      title: "EMS",
      description: "An employee management system made using ReactJs which helps an employer give tasks to employees",
      Icon: Building
    },
    {
      title: "To-Do List",
      description: "A To-Do list using HTML, CSS and Javascript using LocalStorage to save data",
      Icon: ListTodo
    }
  ];

  return (
    
    <div className="Work grid grid-cols-12 mt-12 md:p-0 p-4 ">
      <div className="md:col-span-2 "></div>
      <div className="md:col-span-8 col-span-12 grid grid-cols-3 gap-4 border-b-2 border-secondary pb-12">
        <h1 className="text-3xl font-bold mb-4 col-span-3 text-secondary">My Works</h1>
      {works.map(({title, description, Icon},index)=>(
        <div key={index} className="md:col-span-1 col-span-3 rounded-md hover:border-secondary hover:scale-105 hover:shadow-2xl duration-300 border-2 p-4 shadow-md bg-gray-100 gap-4">
          <Icon size={42} style={{ color: "var(--secondary-color)",marginBottom: "2rem" }} />
          <h1 className="text-2xl font-bold border-b-secondary border-b-2 py-2 mb-4"> { title } </h1>
          <h1> { description } </h1>
        </div>
      ))}
      </div>
      <div className="md:col-span-2"></div>
    </div>
  
)
}

const ContactSection = () => {
  const contacts = [
    {
      Icon: Mail,
      redirect: "mailto:rupeshsaha899@gmail.com",
    },
    {
      Icon: GithubIcon,
      redirect: "https://github.com/rupeshsaha",
    },
    {
      Icon: Linkedin,
      redirect: "https://linkedin.com/in/rupeshsaha",
    },
    {
      Icon: Twitter,
      redirect: "https://twitter.com/therupeshsaha",
    },
  ];

  return (
    <div className="Contact grid grid-cols-12 mt-12 px-4">
      <div className="md:col-span-2 col-span-1"></div>
      <div className="md:col-span-8 col-span-10 grid grid-cols-4 gap-6 border-b-2 border-secondary pb-12">
        <h1 className="text-3xl font-bold mb-4 col-span-4 text-secondary text-center">
          Contact Me
        </h1>
        {contacts.map(({ Icon, redirect }, index) => (
          <a
            key={index}
            href={redirect}
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-1 flex items-center justify-center p-2 rounded-lg  transition-transform transform hover:scale-110 hover:border-2 border-2 border-primary hover:border-secondary"
          >
            <Icon
              className="text-gray-700 group-hover:text-secondary transition-all"
              size={48}
            />
          </a>
        ))}
      </div>
      <div className="md:col-span-2 col-span-1"></div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PerksSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection/>
      <ContactSection/>
    </div>
  );
};

export default HomePage;
