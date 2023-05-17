import { Container } from "./styles";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";


export function ButtonFreight({title, price, loading= false, showLoadingIcon = true, icon: Icon, deliveryTime,  ...rest}){
    const [isLoading, setIsLoading] = useState(loading);


    const handleClick = () => {
        setIsLoading(true);
         
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      };
    

return(
<Container  type="button"
    disabled={isLoading}

    {...rest} onClick={handleClick}>
    {Icon && <Icon size={45} />}

    <div className="title">
    {title }
    <p>{deliveryTime}</p>

    </div>

    <p1>
        {isLoading && showLoadingIcon ? (
          <FaSpinner size={25} className="loading-spinner" />
        ) : (
          "Grátis"
        )}
      </p1>

</Container>


);

}