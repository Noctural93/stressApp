import { Link } from 'react-router-dom';
import { LiaCopyrightSolid } from 'react-icons/lia';
import logo from '../assets/s-m-logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-logo-container'>
          <img src={logo} alt='sm-logo'/>
        </div>
        <div className='footer-about-us-container'>
            <h1>About Us</h1>
            <p><Link  reloadDocument to='/'>home</Link></p>
            <p><Link reloadDocument to='/blogs'>blogs</Link></p>
            <p><Link reloadDocument to='/lectures'>lectures</Link></p>
            <p><Link reloadDocument to='/contact'>contact</Link></p>
        </div>
      </div>
      <p>Copyright{'  '}<LiaCopyrightSolid/>{'  '}2024 stress-management</p>
    </div>
  )
}

export default Footer
