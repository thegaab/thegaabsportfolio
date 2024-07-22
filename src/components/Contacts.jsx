import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import footer from '../assets/footer.png';

const Contacts = () => {
  return (
    <div className='m-8 mt-36 flex items-center justify-center gap-16'>
      {/* Contêiner para ícones */}
      <div className='flex items-center gap-8 text-3xl'>
        <a href="https://www.linkedin.com/in/tiagogab/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/thegaab" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_tgaab/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://open.spotify.com/user/1xytlmihrl4ig34p5iblrxzy6" target="_blank" rel="noopener noreferrer">
          <FaSpotify />
        </a>
      </div>

      {/* Contêiner para a imagem */}
      <div className="flex items-center">
        <motion.img
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          src={footer}
          alt="Ballom Dog"
          className="w-58 lg:w-74"
        />
      </div>
    </div>
  );
}

export default Contacts;
