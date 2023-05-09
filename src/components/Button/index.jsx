import { Container } from "./styles";


export function Button({title, loading= false, icon: Icon,  isActive = true, cart = false, ...rest}){
return(
<Container  type="button"
    
    isActive={isActive}
    disabled={loading}
    className={cart ? 'cart' : ''}
    {...rest}>
      {Icon && <Icon size={20} />}
      { loading ? 'Carregando...' : title }

</Container>


);

}