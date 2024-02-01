import { motion } from "framer-motion";
import { textVariant } from "../utils/motion"; 
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            TECHNICAL SKILLS
          </p>
          <h2 className={`${styles.sectionHeadText} text-center mb-5`}>
            Main Tech Stack.
          </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");