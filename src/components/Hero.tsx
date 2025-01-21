"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16 bg-gray-900 text-white px-7">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-7 place-self-center text-center md:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-teal-300">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Nouran",
                1000,
                "Web Developer",
                1000,
                "Data Scientist",
                1000,
                "Machine Learning Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-6">
            I’m a passionate web developer specializing in building scalable and
            responsive web applications.
          </p>
          <div>
            
            <Link
              href="/#"
              className="px-6 py-3 w-full sm:w-auto inline-block rounded-full bg-gradient-to-br from-teal-800 to-teal-300 hover:opacity-90 text-white font-semibold"
            >
              <span className="block bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-full">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-5 flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="">
            <Image
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJodHdyazBqd2M3dGt3NzB3MGtpbmdlcmpzd3k5NTQ5NjZna3ZmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u1WhXLjwgcXpHJBMRM/giphy.gif"
              alt="profile image"
              className="relative  rounded-full w-auto h-auto"
              width={400}
              height={300}
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
