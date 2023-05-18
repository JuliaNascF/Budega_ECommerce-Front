
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { CartItem } from "../../components/CartItem";
import { ButtonFreight } from "../../components/ButtonFreight";
import { ButtonText } from "../../components/ButtonText";
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { BiHome, BiStore } from 'react-icons/bi'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";

export function Favorites() {
  const [favorites,setFavorites] = useState([]);


  
  useEffect(() => {
    async function fetchFavorites() {
      const resp = await api.get(`/favorites`);

      setFavorites(resp.data);
    }
    fetchFavorites();
  }, []);

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }


  return (
    <Container>
      <Header />
      <main>
      <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
        </div>
        <Content>

          {favorites.length > 0 ? (
            favorites.map(favorites => (
              <CartItem key={favorites._id}
                data={favorites}
              
              />
            ))
          ) : (
            <p>Você não possui favoritos.</p>
          )}

        </Content>
      </main>
    </Container>
  )
}