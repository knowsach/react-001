import {Link} from 'react-router-dom';
import {useContext} from 'react';
import UserContext from '../utils/userContext';

export default Header = () => {

  const userContext = useContext(UserContext);
  const {user} = userContext;
  
    return (
      <div className="flex justify-between bg-slate-200 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className='flex py-10 '>
          
          <Link to='/'>
            <li className='px-2'>Home</li>
          </Link>

          <Link to='/about'>
             <li className='px-2'>About</li>
           </Link>
          
          <Link to='/contact'>
            <li className='px-2'>Contact</li>
          </Link>

          <Link to='/instamart'>
            <li className='px-2'>Instamart</li>
          </Link>
          
            <li className='px-2'>Cart</li>
          </ul>
        </div>

    {
    authenticatUser() ? 
    <button> Log out </button> :
     <button> Login </button>
     }
      </div>
    );
  };

  const authenticatUser = () =>{
    return true;
  };

  const Title = () => (
    <a href="/">
      <img
        className='h-28 px-2'
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );