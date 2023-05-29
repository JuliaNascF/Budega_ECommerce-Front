import { Container } from "./styles";
import { useState, useEffect } from "react";
import { AiTwotoneStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../ButtonText";
import { AlertModal } from "../AlertModal"

export function  Product({ data, title, price, thumbnail, ...rest }){
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { user } = useAuth();

  const navigate= useNavigate();
 

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

 

  function handleFavoriteClick() {
    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  }

  async function addToFavorites() {
    if (user && user._id) {
      setIsFavorite(true);
      try {
        const response = await api.post(`/favorites/${data._id}`);
        console.log(response)
      } catch (error) {
      }
    } else {
      setAlertMessage("Você precisa estar logado para adicionar produtos aos favoritos!");
      setShowAlert(true);
    
    }
  }

  async function removeFromFavorites() {
    if (user && user._id) {
      setIsFavorite(false);
      try {
       await api.delete(`/favorites/${data._id}`);
       
      } catch (error) {
      }
    } else {
      setAlertMessage("Você precisa estar logado para remover produtos aos favoritos!");
      setShowAlert(true);
    
    }
  }

  useEffect(() => {
    async function checkFavoriteStatus() {
      if (user && user._id) {
        try {
          const response = await api.get(`/favorites/check/${data._id}`);
          setIsFavorite(response.data.isFavorite);
        } catch (error) {
        
        }
      }
    }

    checkFavoriteStatus();
  }, [user, data._id]);

  return(
    <Container {...rest}>
         
         
        <img className="thumbnail" onClick={() => handleDetails(data._id)} src={data.thumbnail} alt=""/>
      <div className="productDetails">
      <h1  onClick={() => handleDetails(data._id)}>{data.title} </h1>
      <div  onClick={() => handleDetails(data._id)} className="stars">
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </div>

      <p onClick={() => handleDetails(data._id)}>
      { data.price.currency }
     { data.price.cents}
      </p>

      <p1>10x de R$250</p1>

      </div>

      <div className="heart">
        <ButtonText
          color
          icon={isFavorite ? AiFillHeart : AiOutlineHeart}
          onClick={handleFavoriteClick}
       
        />
      </div>
      {showAlert && <AlertModal message={alertMessage} showLoginButton onClose={() => setShowAlert(false)} />}

    </Container>
  )
};