'use client';
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with user authentication, product catalog, and a payment gateway.",
      techStack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      link: "/projects/e-commerce",
    },
    {
      title: "Data Dashboard",
      description:
        "A data visualization dashboard to track and analyze key metrics in real-time.",
      techStack: ["React", "Chart.js", "Node.js", "MongoDB"],
      link: "/projects/data-dashboard",
    },
    {
      title: "AI Chatbot",
      description:
        "An AI-powered chatbot for customer support, built with natural language processing capabilities.",
      techStack: ["Python", "TensorFlow", "Flask", "React"],
      link: "/projects/ai-chatbot",
    },
  ];

  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    timeline.fromTo(
      projectsRef.current,
      { opacity: 0, y: 100 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.2, 
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-8 ">
      <div className="container mx-auto text-center ">
        <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
        <p className="text-white text-xl font-bold mb-12">
          Explore some of the exciting projects I’ve worked on, showcasing
          innovation and technical expertise.
        </p>

        <div className="relative flex justify-start flex-wrap lg:flex-nowrap gap-2 ">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectsRef.current[index] = el; 
              }}
              className="w-full lg:w-1/3 mt-10 opacity-0" 
            >
              <div className="bg-gray-800 shadow-lg hover:shadow-xl rounded-lg p-6 transition-transform duration-500 hover:scale-105">
                <h2 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-white mb-4">{project.description}</p>
                <div className="mb-4">
                  <strong className="text-white">Technologies:</strong>{" "}
                  <span className="text-white">
                    {project.techStack.join(", ")}
                  </span>
                </div>
                <Link
                  href={project.link}
                  className="text-teal-600 hover:underline font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
