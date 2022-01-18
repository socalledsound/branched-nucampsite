import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesList from './features/campsites/CamspitesList';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand className='mr-auto' href='/'>
              <img className='navbar-logo' src={NucampLogo} alt='nucamp logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsitesList />
    </div>
  );
}

export default App;
