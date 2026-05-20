import { useState } from 'react';
import { Github } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

const projects = [
 {
  title: "Food Delivery App",
  description:
    "A full-stack food ordering and delivery application built using the MERN stack. Features include dynamic menu listing, cart management, order placement, simulated real-time order tracking, REST API integration, responsive UI, and backend testing.",
  imgUrl:
    "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  githubUrl: "https://github.com/Aman2907/raftlab",
  liveUrl: "https://raftlab.vercel.app/",
},
  {
    title: "Blog Application",
    description: "A full-featured blog platform built with React and Node.js",
    imgUrl: "https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Aman2907/Blog-Application",
  },
  {
    title: "Real-time Chatbox",
    description: "WebSocket-powered chat application with real-time messaging",
    imgUrl: "https://plus.unsplash.com/premium_photo-1682023585957-f191203ab239?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Aman2907/REALTIME-CHAT-APPLICATION",
  },
  {
    title: "Pizza Store",
    description: "E-commerce platform for a pizza delivery service",
    imgUrl: "https://images.unsplash.com/photo-1753285632508-a457b897dd55?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Aman2907/PizzaApp-using-Reactjs",
  },
  {
    title: "File Upload System",
    description: "Secure file upload and management system",
    imgUrl: "https://plus.unsplash.com/premium_photo-1683732137653-9121ba5e8ede?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Aman2907/FileUploading-Application",
  },
  {
    title: "ecommerseShopify",
    description: "Collaborative task management application",
    imgUrl: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Aman2907/ecommerseShopify",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    imgUrl: "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Aman2907/weatherAPP-using-Reactjs",
  },
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore my portfolio of projects, each crafted with attention to detail and modern best practices.
            Click on any project to view its source code on GitHub.
          </p>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tabGroup}>
            <button
              onClick={() => setActiveTab('all')}
              className={`${styles.tabButton} ${activeTab === 'all' ? styles.active : ''}`}
            >
              All Projects
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://github.com/Aman2907"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <Github className={styles.githubIcon} size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};