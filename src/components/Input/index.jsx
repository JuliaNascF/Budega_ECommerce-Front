import { Container } from "./styles";


export function Input({icon: Icon,login = false, ...rest}){
return (
 <Container   className={login ? 'login' : ''}>
 
  {Icon && <Icon size= {20}/>}
   <input {...rest}/>


 </Container>



);
}