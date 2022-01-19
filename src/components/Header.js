import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand className='mr-auto' href='/'>
              <img className='navbar-logo' src={NucampLogo} alt='nucamp logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
    )
}
export default Header