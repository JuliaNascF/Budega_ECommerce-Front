
import { Container, Content } from "./styles"
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import { ButtonText } from '../../../components/ButtonText'
import { Product } from "../../../components/Product"
import { api } from "../../../services/api"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiTwotoneStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { sampleSize } from 'lodash';
import { useAuth } from "../../../hooks/auth"

export function Details() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [data, setData] = useState({});
  const [category, setCategory] = useState('');
  const [currentProductId, setCurrentProductId] = useState('');
 

  const { user } = useAuth(); // Obter o objeto de contexto de autenticação
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

     
  function handlePay() {
    navigate("/payment");
  }
   

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/id/${params.id}`);
      setData(response.data);
      setCategory(response.data.category);
      setCurrentProductId(response.data._id);
    }

    fetchProduct();
  }, [params.id])


  useEffect(() => {
    async function fetchRelatedProducts() {
      const response = await api.get(`/products/${category}`); 

      const products = response.data;
      const related = sampleSize(products, 4);
      setRelatedProducts(related);
    }

    if (category) {
      fetchRelatedProducts();
    }
  }, [category,  currentProductId]);

  function handleThumbnailClick(index) {
    setSelectedIndex(index);
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
        const response = await api.post(`/favorites/${currentProductId}`);
        
      } catch (error) {
        alert("Erro ao adicionar produto aos favoritos!");
      }
    } else {
      alert("Você precisa estar logado para adicionar produtos aos favoritos!");
    
  
      navigate("/signin");
    }
  }
  
  async function removeFromFavorites() {
    if (user && user._id) {
      setIsFavorite(false);
      try {
        const response = await api.delete(`/favorites/${currentProductId}`);
      
      } catch (error) {
        alert("Erro ao remover produto dos favoritos!");
      }
    } else {
    alert("Você precisa estar logado para remover produtos dos favoritos!");
    
      navigate("/signin");
    }
  }

  useEffect(() => {
    async function checkFavoriteStatus() {
      if (user && user._id) {
        try {
          const response = await api.get(`/favorites/check/${currentProductId}`);
          setIsFavorite(response.data.isFavorite);
        } catch (error) {
          
        }
      }
    }
  
    checkFavoriteStatus();
  }, [user, currentProductId]);
  


  async function AddToCart() {
 
    
    if (user && user._id) {
      try {
        const response = await api.post(`/cart/${currentProductId}`);
        alert("Produto adicionado ao carrinho!");
      } catch (error) {
        alert("Erro ao adicionar produto ao carrinho!");
      }
    } else {
    
      alert("Você precisa estar logado para adicionar produtos ao carrinho!");
      navigate("/signin")
    }
  }
  


  async function AddToCartPay() {
 
    
    if (user && user._id) {
      try {
        const response = await api.post(`/cart/${currentProductId}`);
        navigate("/cart")
      } catch (error) {
        alert("Erro ao comoprar produto ao carrinho!");
      }
    } else {
    
      alert("Você precisa estar logado para comprar produtos!");
      navigate("/signin")
    }
  }
  

  return (
    <Container>
      <Header />
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
        </div>
        <Content>
          <h1>{data.title}</h1>
          <div className="image-gallery">
            <div className="thumbnails">

              {data.images && data.images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  className={index === selectedIndex ? 'active' : ''}
                />
              ))}
            </div>
            <div className="selected-image">
              <img src={data.images?.[selectedIndex]} alt="Selected" />
            </div>
            <div className="details">

              <div className="stars">

                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>

              <div className="price_heart">

                <h1>
                  {data.price && (
                    <>
                      {data.price.currency} {data.price.cents}
                      <span> à vista</span>
                    </>
                  )}
                </h1>

                <ButtonText color icon={isFavorite ? AiFillHeart : AiOutlineHeart} onClick={handleFavoriteClick} />
              </div>


              <p>10x de R$ 250 sem juros
              </p>

              <div className="buttons">
                <Button onClick={AddToCartPay} title="Comprar" />
                <Button title="Adicionar ao carrinho" cart onClick={AddToCart} />
              </div>

            </div>

          </div>
          <h2>Produtos Relacionados</h2>
          <div className="relatedProducts">

          {relatedProducts.map((product) => (
            <Product
              key={product._id}
              thumbnail={product.thumbnail}
              category={product.category}
              price={product.price}
              data={product}
            />
          ))}
          </div>

          <h3>Descrição</h3>

          <p> {data.description}</p>

        </Content>
      </main>
    </Container>
  )
}
