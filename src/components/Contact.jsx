import  { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ContactButton from './ContactButton';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Pily",
          from_email: form.email,
          to_email: "pilyctp@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse justify-start gap-2 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-2xl'  
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-6'  
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>  
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your good name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-base'
              autoComplete="on" 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>  
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-base'
              autoComplete="on"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span> 
            <textarea
              rows={5} 
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-base'  
            />
          </label>

          <button type='submit' className='flex flex-row justify-center'>
            <ContactButton buttonText='Send' >
            {loading ? "Sending..." : "Send"}
            </ContactButton>
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");