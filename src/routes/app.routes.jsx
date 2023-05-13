import { Routes, Route } from 'react-router-dom';


import  Home  from '../pages/Home'
import { Details } from '../pages/Details'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp';



export  function AppRoutes(){
    return(
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/details/:id' element = {<Details/>}/>
       <Route path='/signin' element = {<SignIn/>}/>
       <Route path='/register' element = {<SignUp/>}/>
     
         
     </Routes>


    );
}