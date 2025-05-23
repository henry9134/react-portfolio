import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/henry9134"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/henry-santiago13/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
}
