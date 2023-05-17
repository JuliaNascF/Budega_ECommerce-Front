import { Container } from "./styles";


export function Input({icon: Icon,login = false, quantity=false,freight=false, ...rest}){
return (
 <Container className={login ? 'login' : '' + (quantity ? ' quantity' : '') + (freight ? ' freight' : '')}>
 
  {Icon && <Icon size= {20}/>}
   <input {...rest}/>


 </Container>



);
}