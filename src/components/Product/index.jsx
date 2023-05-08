import { Container } from "./styles";

export function  Product({ data, title, price, thumbnail, ...rest }){
 

  return(
    <Container {...rest}>

         
        <img src={data.thumbnail} />
       

      <h1>{data.title} </h1>

      <p>
     { data.price.cents}
      </p>


    </Container>
  )
};