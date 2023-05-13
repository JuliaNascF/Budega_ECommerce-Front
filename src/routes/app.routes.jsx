import { Routes, Route } from 'react-router-dom';


import  Home  from '../pages/Home'
import { Details } from '../pages/Details'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp';
import { Cart } from '../pages/Cart'



export  function AppRoutes(){
    return(
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/details/:id' element = {<Details/>}/>
       <Route path='/signin' element = {<SignIn/>}/>
       <Route path='/register' element = {<SignUp/>}/>
       <Route path='/cart' element = {<Cart/>}/>
     
         
     </Routes>


    );
}