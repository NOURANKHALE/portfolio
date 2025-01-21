"use client";
import * as motion from "motion/react-client"
import {FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaJava,FaPython, FaNode } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { RiPhpLine } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";

const MySkills = () => {
  return (
      <div className=" mx-auto text-center py-12 bg-gray-900">
        <h1 className="text-4xl font-bold text-white mb-8">My Skills</h1>
        <p className="text-white text-lg mb-12 px-4">
          Here are some of the technologies I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-4 ">
          <SkillCard name="HTML" Icon={FaHtml5} color="text-orange-500" />
          <SkillCard name="CSS" Icon={FaCss3Alt} color="text-blue-500" />
          <SkillCard name="JavaScript" Icon={FaJsSquare} color="text-yellow-500" />
          <SkillCard name="React" Icon={FaReact} color="text-blue-400" />
          <SkillCard name="Java" Icon={FaJava} color="text-red-600" />
          <SkillCard name="Python" Icon={FaPython} color="text-blue-400" />
          <SkillCard name="TypeScript" Icon={SiTypescript} color="text-blue-600" />
          <SkillCard name="Next.js" Icon={SiNextdotjs} color="text-white" />
          <SkillCard name="Php" Icon={RiPhpLine} color="text-white" />
          <SkillCard name="SQL" Icon={TbFileTypeSql} color="text-blue-500" />
          <SkillCard name="Node.js" Icon={FaNode} color="text-green-500" />
          
        </div>
      </div>
  );
};

type SkillCardProps = {
  name: string;
  Icon: React.ElementType;
  color: string;
};
  const SkillCard: React.FC<SkillCardProps> = ({ name, Icon, color  }) => {
    return (
      
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className={`text-6xl ${color} mb-4 justify-items-center`}
      >
        <Icon />
      
          <p className="mt-4 text-sm font-semibold text-white">{name}</p>
      </motion.div>

    );
  };
export default MySkills;

