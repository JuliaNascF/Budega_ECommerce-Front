
import { Container, Content } from "./styles"
import { useAuth } from "../../../hooks/auth";
import { FaSpinner } from "react-icons/fa";
import { ButtonText } from "../../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import { BiX } from 'react-icons/bi'


export function MobileFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchFavorites() {
    try {
      const resp = await api.get(`/favorites`);
      setFavorites(resp.data.favorites);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  const navigate = useNavigate();
  const { user } = useAuth();

  function handleBack() {
    navigate("/home");
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }


  async function removeFromFavorites(id) {
    if (user && user._id) {
      const updatedFavorites = favorites.filter(favorite => favorite._id !== id);
      setFavorites(updatedFavorites);

    
      try {
       await api.delete(`/favorites/${id}`);
        fetchFavorites();
      } catch (error) {
        alert("Erro ao remover produto dos favoritos!");
      }
    } else {
      alert("Você precisa estar logado para remover produtos dos favoritos!");
      navigate("/signin");
    }
  }

  return (
    <Container>
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
        </div>
        <Content>
        {isLoading ? (
             <FaSpinner size={25} className="loading-spinner" />
          ) : favorites.length > 0 ? (
            favorites.map((favorite) => (
              <div
                className="favorite"
                key={favorite._id}
              >
                  <h1  >{favorite.title} </h1>
                <img  onClick={() => handleDetails(favorite._id)} src={favorite.thumbnail} alt="" />
                <p  onClick={() => handleDetails(favorite._id)}>
                  {favorite.price.currency} {favorite.price.cents}
                </p>
                 <ButtonText icon={BiX} onClick={() => removeFromFavorites(favorite._id)}/>
              </div>
            ))
          ) : (
            <p>Você não possui favoritos.</p>
          )}
        </Content>
      </main>
    </Container>
  );
}