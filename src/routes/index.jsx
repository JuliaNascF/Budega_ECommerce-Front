import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './app.routes';
import { CartProvider } from "../components/CartContext";



export function Routes(){
    return(
     <BrowserRouter>
      <CartProvider>
       
      <AppRoutes/>

      </CartProvider>
     
     </BrowserRouter>


    );
}