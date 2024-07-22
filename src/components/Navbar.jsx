import logo from '../assets/logo.png';
import { FaGithub} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-10' src={logo} alt='logo' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
                <a href="https://github.com/thegaab" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;