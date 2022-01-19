import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import CampsitesList from './features/campsites/CamspitesList';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
