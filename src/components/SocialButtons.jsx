import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

const SocialButtons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const iconSize = 'xl'; 

  return (
    <div className='flex flex-row justify-center items-center gap-2'>
      <a
        href="https://github.com/pilyct"
        title='GitHub Profile'
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: hoveredIcon === faGithub ? 'white' : '#aaa6c3' }}
        onMouseEnter={() => handleMouseEnter(faGithub)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>

      <a
        href="https://www.linkedin.com/in/pilarct/"
        title='LinkedIn Profile'
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: hoveredIcon === faLinkedin ? 'white' : '#aaa6c3' }}
        onMouseEnter={() => handleMouseEnter(faLinkedin)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>

      <a
        href="https://discordapp.com/users/pily.swatch"
        title='Discord Profile'
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: hoveredIcon === faDiscord ? 'white' : '#aaa6c3' }}
        onMouseEnter={() => handleMouseEnter(faDiscord)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faDiscord} size={iconSize} />
      </a>
    </div>
  );
};

export default SocialButtons;


