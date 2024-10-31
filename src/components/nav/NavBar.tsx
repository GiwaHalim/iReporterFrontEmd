import logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet} from "react-router-dom";

function NavBar({user, admin}) {

  const historyNavLink = !user ? "/signin" : "/history"

  return (<>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <NavLink to={'/'}  className=" navbar-brand me-auto"> <img src={logo} alt='logo'></img></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav " >
          <Nav className='me-auto'>

          </Nav>
          <Nav>
            <NavLink to={'/'} className='nav-link'>Home</NavLink>
            { !admin && <NavLink to={historyNavLink} className='nav-link'>History</NavLink>}
            {user ? <NavLink to={'/signout'} className='nav-link'>Sign out</NavLink> : <NavLink to={'/signin'} className='nav-link'>Sign In</NavLink>}
          </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>

    <Outlet />
    </Container>
  </>
  );
}

export default NavBar;