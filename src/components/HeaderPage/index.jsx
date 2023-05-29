import { Container } from "./styles"


 export function HeaderPage({mobile=false}) {
 
    return (

      <Container className={mobile? 'mobile' : ''}>
        <h1>Ofertas especiais</h1>
        <p>Os melhores preços</p>
      </Container>
    
    );
  }
  
 
  
  
  
  
  
  
  