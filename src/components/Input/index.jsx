import { Container } from "./styles";


export function Input({icon: Icon,login = false, quantity=false,freight=false, ...rest}){
return (
 <Container className={login ? 'login' : '' + (quantity ? ' quantity' : '') + (freight ? ' freight' : '') }>
 
   <input {...rest}/>
  {Icon && <Icon size= {20}/>}


 </Container>



);
}