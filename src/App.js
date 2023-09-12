import './App.css';
import Home from './components/Home';
import List from './components/List';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/home/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
