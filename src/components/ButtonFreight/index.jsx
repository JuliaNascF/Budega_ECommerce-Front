import { Container } from "./styles";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";


export function ButtonFreight({title,disabled, price, loading= false, showLoadingIcon = true, icon: Icon, deliveryTime, freightMobile=false, isActive,onClick,  ...rest}){
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = () => {
    if (!isActive) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      onClick(); // Chama a função onClick passada como propriedade
    }
  };


return(
<Container   type="button"
      disabled={disabled || isActive} // Desabilita o botão se estiver desativado ou já estiver ativo
      className={`${freightMobile ? "freightMobile" : ""} ${isActive ? "clicked" : ""}`}
      {...rest}
      onClick={handleClick}
    >
    {Icon && <Icon size={45} />}

    <div className="title">

      <h1>{title }</h1>
    <p>{deliveryTime}</p>

    </div>
     
    <p1>
    {isLoading && showLoadingIcon && isActive  ? (
          <FaSpinner size={25} className="loading-spinner" />
        ) : (
          "Grátis"
        )}
      </p1>

</Container>


);

}