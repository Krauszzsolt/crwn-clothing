
import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './page/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/hats' element={<HatsPage />} />
        <Route path='/hats/:id' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
