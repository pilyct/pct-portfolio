
import { useState } from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full border-t-2 border-gray-200 h-8 w-8"></div>
);


const Button = ({ buttonText, isContactButton = false, enableLoading = false }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (enableLoading) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };


  const buttonStyles = {
    send: 'relative inline-flex items-center justify-start px-12 py-3 overflow-hidden font-bold rounded-full group',
    contact: 'relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-bold rounded-full group shadow-2xl shadow-violet-500',
  };

  return (
    <motion.a
      href="#contact"
      className={`${isContactButton ? buttonStyles.contact : buttonStyles.send}`}
      onClick={handleClick}
    >
      <motion.span
        className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-violet-500 opacity-3%"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.03, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
      ></motion.span>

      <motion.span
        className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-violet-500 opacity-100 group-hover:-translate-x-8"
      ></motion.span>

      <motion.span
        className="sm:text-[20px] text-[16px] uppercase tracking-wider relative w-full text-left text-[#dfd9ff] transition-colors duration-200 ease-in-out group-hover:text-white"
      >
        {loading ? <LoadingSpinner /> : buttonText}
      </motion.span>

      <motion.span
        className="absolute inset-0 border-2 border-violet-500 rounded-full"
      ></motion.span>
    </motion.a>
  );
};

export default Button;
