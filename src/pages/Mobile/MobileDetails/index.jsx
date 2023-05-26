
import { Container, Content } from "./styles"
import { Button } from '../../../components/Button'
import { ButtonText } from '../../../components/ButtonText'
import { AlertModal } from "../../../components/AlertModal"
import { AlertCart } from "../../../components/AlertCart"
import { Product } from "../../../components/Product"
import { api } from "../../../services/api"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiTwotoneStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { sampleSize } from 'lodash';
import { useAuth } from "../../../hooks/auth"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function MobileDetails() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [data, setData] = useState({});
  const [category, setCategory] = useState('');
  const [currentProductId, setCurrentProductId] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlertCart, setShowAlertCart] = useState(false);
  const [alertMessageCart, setAlertMessageCart] = useState("");


  const { user } = useAuth(); // Obter o objeto de contexto de autenticação
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/home");
  }

  function handleDetails(id) {
    setCurrentProductId(id);
    navigate(`/details/${id}`)
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
      const response = await api.get(`/products/${category}`); // Busca produtos relacionados usando a categoria do produto atual

      const products = response.data;
      const related = sampleSize(products, 5);
      setRelatedProducts(related);
    }

    if (category) {
      fetchRelatedProducts();
    }
  }, [category, currentProductId]);



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
        const response = await api.delete(`/favorites/${currentProductId}`);

      } catch (error) {
      }
    } else {
      setAlertMessage("Você precisa estar logado para remover produtos dos favoritos!");
      setShowAlert(true);
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
        setAlertMessageCart("Produto adicionado ao carrinho!");
        setShowAlertCart(true);
      } catch (error) {
        setAlertMessage("Erro ao adicionar produto ao carrinho!");
        setShowAlert(true);
      }
    } else {
      setAlertMessage("Você precisa estar logado para adicionar produto ao carrinho!");
      setShowAlert(true);
    }
  }


  async function AddToCartPay() {
 
    
    if (user && user._id) {
      try {
        const response = await api.post(`/cart/${currentProductId}`);
        navigate("/cart")
      } catch (error) {
      }
    } else {
    
      setAlertMessage("Você precisa estar logado para comprar produtos!");
      setShowAlert(true);
    }
  }

  return (
    <Container>

      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
        </div>
        <Content>

          <Slider dots={true} infinite={true} slidesToShow={1} slidesToScroll={1}>
            {data.images &&
              data.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index}`} />
              ))}
          </Slider>



          <div className="details">

            <h1>{data.title}

            </h1>
            <div className="heart">

              <ButtonText color icon={isFavorite ? AiFillHeart : AiOutlineHeart} onClick={handleFavoriteClick} />
            </div>
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


            </div>


            <p>10x de R$ 250 sem juros</p>

            <div className="buttons">
              <Button title="Comprar" onClick={AddToCartPay} />
              <Button title="Adicionar ao carrinho" cart onClick={AddToCart} />
            </div>

          </div>


          <h2>Produtos Relacionados</h2>

          <Slider 
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            className="Slider"
            
          >
            {relatedProducts.map((product) => (
              <Product
                key={product._id}
                thumbnail={product.thumbnail}
                category={product.category}
                price={product.price}
                data={product}
                onClick={() => handleDetails(product._id)}
              />
            ))}
          </Slider>



          <h3>Descrição</h3>

          <p> {data.description}</p>

        </Content>
      </main>
      {showAlert && <AlertModal message={alertMessage} showLoginButton onClose={() => setShowAlert(false)} />}
      {showAlertCart && <AlertCart message={alertMessageCart} onClose={() => setShowAlertCart(false)} />}
    </Container>
  )
}
