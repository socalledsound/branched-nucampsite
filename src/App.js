import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsiteCard from './features/campsites/CampsiteCard';

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
      <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}

export default App;
