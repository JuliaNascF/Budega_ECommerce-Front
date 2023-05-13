import { Container } from "./styles";


export function Input({icon: Icon,login = false, quantity=false, ...rest}){
return (
 <Container className={login ? 'login' : '' + (quantity ? ' quantity' : '')}>
 
  {Icon && <Icon size= {20}/>}
   <input {...rest}/>


 </Container>



);
}