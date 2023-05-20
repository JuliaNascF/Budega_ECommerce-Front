import { Container } from "./styles";


export function Input({icon: Icon,login = false, quantity=false,freight=false,loginMobile=false, ...rest}){
return (
 <Container className={login ? 'login' : '' + (quantity ? ' quantity' : '') + (freight ? ' freight' : '') + (loginMobile ? ' loginMobile' : '') }>
 
   <input {...rest}/>
  {Icon && <Icon size= {20}/>}


 </Container>



);
}