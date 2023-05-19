
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'

import { FaSpinner } from "react-icons/fa";
import { ButtonText } from "../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";

export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
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
    fetchFavorites();
  }, []);

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }


  return (
    <Container>
      <Header />
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
                onClick={() => handleDetails(favorite._id)}
                className="favorite"
                key={favorite._id}
              >
                <h1>{favorite.title}</h1>
                <img src={favorite.thumbnail} alt="" />
                <p>
                  {favorite.price.currency} {favorite.price.cents}
                </p>
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