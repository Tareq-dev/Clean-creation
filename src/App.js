import './App.css';
import Header from './components/Header/Header';
import HowWork from './components/HowWork/HowWork';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HowWork />
      <Menu />
      <Shop />
    </div>
  );
}

export default App;
