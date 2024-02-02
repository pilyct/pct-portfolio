import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import TextSpan from './TextSpan';
import Button from './Button';
import SocialButtons from './SocialButtons';

const greetings = [..."~$ Hi, I'm "];
const name = [..."Pily"];
const description = [..."A Full-Stack developer with a background rooted in data."];

const renderText = (textArray) => {
  return textArray.map((letter, index) => (
    <TextSpan key={index}>
      {letter === " " ? "\u00A0" : letter}
    </TextSpan>
  ));
};

const Hero = () => {
  const isMobile = window.innerWidth <= 450;

  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-start items-center top-[65px] text-center ${styles.paddingX}`}>
      
      <div className='flex flex-col justify-center mb-5'>
        <h1 className={`${styles.heroHeadText} py-5`}>
          {isMobile ? "~$ Hi, I'm Pily" : renderText(greetings)}
          {isMobile ? null : renderText(name)}
        </h1>

        <p className={`${styles.heroSubText} ${isMobile ? styles.heroMobileSubText : styles.heroSubText}`} >
          {/* {isMobile ? "A Full-Stack developer with a " + "background rooted in data." : renderText(description)} */}
          {isMobile ? "A Full-Stack developer with a background rooted in data." : renderText(description)}
        </p>
      </div>

      <div className='mb-16'>
        <SocialButtons />
      </div>
        

      <div className='mb-52'>
        <Button buttonText='Contact Me' isContactButton={true} />
      </div>

      <div className='pt-6'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default SectionWrapper(Hero, "");
