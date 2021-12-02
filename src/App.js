import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sing-up/sign-in-and-sing-up.component';

function App() {
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from 'firebase/app';
  // import { getAnalytics } from 'firebase/analytics';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDdqiaMHiX8hPH_DpUFVf0ozvP3BgXApss',
    authDomain: 'crwn-db-42a2b.firebaseapp.com',
    projectId: 'crwn-db-42a2b',
    storageBucket: 'crwn-db-42a2b.appspot.com',
    messagingSenderId: '95285597966',
    appId: '1:95285597966:web:5ee390af7c6ad4ed7e295f',
    measurementId: 'G-8VSBSP97N0',
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
