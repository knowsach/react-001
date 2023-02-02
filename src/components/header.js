import {Link} from 'react-router-dom';

export default Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
          
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to='/about'>
             <li>About</li>
           </Link>
          
          <Link to='/contact'>
            <li>Contact</li>
          </Link>

          <Link to='/instamart'>
            <li>Instamart</li>
          </Link>
          
            <li>Cart</li>
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
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );