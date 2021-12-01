import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
