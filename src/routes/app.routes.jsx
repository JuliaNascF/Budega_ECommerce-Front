import { Routes, Route } from 'react-router-dom';

import  Home  from '../pages/Desktop/Home';
import { Details } from '../pages/Desktop/Details';
import { SignIn } from '../pages/Desktop/SignIn';
import { SignUp } from '../pages/Desktop/SignUp';
import { Cart } from '../pages/Desktop/Cart';
import { Favorites } from '../pages/Desktop/Favorites';

import { MobileSplash } from '../pages/Mobile/MobileSplash';
import { MobileHome } from '../pages/Mobile/MobileHome';
import { MobileDetails } from '../pages/Mobile/MobileDetails';
import { MobileSignIn } from '../pages/Mobile/MobileSignIn';
import { MobileSignUp } from '../pages/Mobile/MobileSignUp';
import { MobileCart } from '../pages/Mobile/MobileCart';
import { MobileFavorites } from '../pages/Mobile/MobileFavorites';


export  function AppRoutes(){
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <Routes>
      {isMobile ? (
        <>
          <Route path="/" element={<MobileSplash />} />
          <Route path="/home" element={<MobileHome />} />
          <Route path="/details/:id" element={<MobileDetails />} />
          <Route path="/signin" element={<MobileSignIn />} />
          <Route path="/register" element={<MobileSignUp />} />
          <Route path="/cart" element={<MobileCart />} />
          <Route path="/favorites" element={<MobileFavorites />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </>
      )}
    </Routes>
  );
}