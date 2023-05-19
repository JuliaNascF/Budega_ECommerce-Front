import { Routes, Route } from 'react-router-dom';

import  Home  from '../pages/Desktop/Home'
import { Details } from '../pages/Desktop/Details'
import { SignIn } from '../pages/Desktop/SignIn'
import { SignUp } from '../pages/Desktop/SignUp';
import { Cart } from '../pages/Desktop/Cart';
import { Favorites } from '../pages/Desktop/Favorites'


export  function AppRoutes(){
    return(
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/details/:id' element = {<Details/>}/>
       <Route path='/signin' element = {<SignIn/>}/>
       <Route path='/register' element = {<SignUp/>}/>
       <Route path='/cart' element = {<Cart/>}/>
       <Route path='/favorites' element = {<Favorites/>}/>

     
         
     </Routes>


    );
}