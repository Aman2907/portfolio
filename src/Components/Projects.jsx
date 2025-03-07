import { useState } from 'react';
import { Github } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Blog Application",
    description: "A full-featured blog platform built with React and Node.js",
    imgUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Aman2907/Blog-Application",
  },
  {
    title: "Real-time Chatbox",
    description: "WebSocket-powered chat application with real-time messaging",
    imgUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Aman2907/REALTIME-CHAT-APPLICATION",
  },
  {
    title: "Pizza Store",
    description: "E-commerce platform for a pizza delivery service",
    imgUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Aman2907/PizzaApp-using-Reactjs",
  },
  {
    title: "File Upload System",
    description: "Secure file upload and management system",
    imgUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Aman2907/FileUploading-Application",
  },
  {
    title: "ecommerseShopify",
    description: "Collaborative task management application",
    imgUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Aman2907/ecommerseShopify",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    imgUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
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