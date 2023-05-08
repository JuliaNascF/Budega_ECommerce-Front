import { Container } from "./styles";


export function Button({title, loading= false, icon: Icon,  isActive = true, ...rest}){
return(
<Container  type="button"
    
    isActive={isActive}
    disabled={loading}
    {...rest}>
      {Icon && <Icon size={20} />}
      { loading ? 'Carregando...' : title }

</Container>


);

}