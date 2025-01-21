"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { BarChart, Bot, Code } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
    const cards = [
      {
        title: "Frontend Development",
        description:
          "Building interactive and responsive user interfaces using frameworks like React, Next.js, and TailwindCSS.",
        icon: <Code className="text-6xl text-white" />, 
      },
      {
        title: "Data Science",
        description:
          "Analyzing data to extract insights, create visualizations, and implement solutions using Python and popular libraries.",
        icon: <BarChart className="text-6xl text-white" />, 
      },
      {
        title: "Machine Learning",
        description:
          "Designing and training models to automate tasks and solve complex problems with advanced machine learning techniques.",
        icon: <Bot className="text-6xl text-white" />, 
      },
    ];

  return (
    <section className="bg-gray-900 py-40 px-8 " >
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/3 text-center lg:text-left">   
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-white text-xl mb-6">
            I’m a passionate web developer and tech enthusiast specializing in
            modern development technologies and machine learning.
          </p>
        </div>
        <Swiper 
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-teal-800  shadow-md hover:shadow-lg transform hover:scale-105 transition-all rounded-2xl p-12 " 
              >
                <div className="flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-white mb-4">{card.description}</p>
                <Link
                  href="#contact"
                  className="text-gray-800 hover:underline font-medium text-2xl"
                >
                  Learn More →
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </section>
  );
}
