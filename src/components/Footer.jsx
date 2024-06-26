const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative z-0 flex flex-col justify-center items-center text-[12px] text-secondary pt-10 pb-6'>
      <p>Made with 💜 by </p>
      <p>PilyCT | Portfolio - Copyright &#169; {currentYear} </p>
    </footer>
  )
}

export default Footer;