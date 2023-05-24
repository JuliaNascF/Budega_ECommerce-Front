import { Routes, Route } from 'react-router-dom';

import  Home  from '../pages/Desktop/Home';
import { Details } from '../pages/Desktop/Details';
import { SignIn } from '../pages/Desktop/SignIn';
import { SignUp } from '../pages/Desktop/SignUp';
import { Cart } from '../pages/Desktop/Cart';
import { Favorites } from '../pages/Desktop/Favorites';
import { Payment } from '../pages/Desktop/Payment';
import { Boleto } from '../pages/Desktop/Boleto';
import { Pix } from '../pages/Desktop/Pix';
import { Card} from '../pages/Desktop/Card';
import { QRCode } from '../pages/Desktop/QRCode';


import { MobileSplash } from '../pages/Mobile/MobileSplash';
import { MobileHome } from '../pages/Mobile/MobileHome';
import { MobileDetails } from '../pages/Mobile/MobileDetails';
import { MobileSignIn } from '../pages/Mobile/MobileSignIn';
import { MobileSignUp } from '../pages/Mobile/MobileSignUp';
import { MobileCart } from '../pages/Mobile/MobileCart';
import { MobileFavorites } from '../pages/Mobile/MobileFavorites';
import { MobilePayment } from '../pages/Mobile/MobilePayment';
import { MobilePix } from '../pages/Mobile/MobilePix';
import { MobileBoleto } from '../pages/Mobile/MobileBoleto';
import { MobileCard} from '../pages/Mobile/MobileCard';
import { MobileQRCode } from '../pages/Mobile/MobileQRCode';


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
          <Route path="/card" element={<MobileCard />} />
          <Route path="/payment" element={<MobilePayment />} />
          <Route path="/boleto" element={<MobileBoleto/>} />
          <Route path="/pix" element={<MobilePix />} />
          <Route path="/qrcode" element={<MobileQRCode/>} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/boleto" element={<Boleto/>} />
          <Route path="/pix" element={<Pix />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/card" element={< Card/>} />
        </>
      )}
    </Routes>
  );
}