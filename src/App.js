import './App.css';
import Header from './components/Header/Header';
import HowWork from './components/HowWork/HowWork';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import View from './components/ViewMore/View';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HowWork />
      <Menu />
      <View/>
    </div>
  );
}

export default App;
