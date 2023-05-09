
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Product } from "../../components/Product"
import { api } from "../../services/api"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiTwotoneStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { sampleSize } from 'lodash';


export function Details() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  const [category, setCategory] = useState('');
  const [currentProductId, setCurrentProductId] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleDetails(id) {
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
  }, [category,  currentProductId]);

  function handleThumbnailClick(index) {
    setSelectedIndex(index);
  }

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
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
                <Button title="Comprar" />
                <Button title="Adicionar ao carrinho" cart />
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
              onClick={() => handleDetails(product._id)}
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
