import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './AppContext';
import useIsLargeScreen from './LargeScreen';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Search from './Components/Search';
import Notifications from './Components/Notifications';
import Featured from './Components/Featured';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Counter from './Components/Counter';


function App() {
  const computer = useIsLargeScreen();
  return (
    <BrowserRouter basename='MyEstore'>
    <Provider>
      <div className="App">
        <SideBar />
          <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/search' element={<Search />} />
      <Route path='/featured' element={<Featured />}/>
      <Route path='/notif' element={<Notifications/>}/>
      <Route path='/counter' element={<Counter />} />
    </Routes>
        <Header />
        {(!computer) && <Navigation />}
      </div>
    
    
    </Provider>
    </BrowserRouter>
  );
}

export default App;

