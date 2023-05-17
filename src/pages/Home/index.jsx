import { Container, Content, Image, Category } from "./styles";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product"
import { HeaderPage } from "../../components/HeaderPage";
import { ButtonText } from "../../components/ButtonText";
import { useEffect, useState, useRef } from "react";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";




function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const resp = await api.get(`/products`);

      setProducts(resp.data);
    }
    fetchProducts();
  }, []);
   
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }



const sofaProductContainerRef = useRef(null);
const mesaProductContainerRef = useRef(null);
const cadeiraProductContainerRef = useRef(null);
const luminariaProductContainerRef = useRef(null);



  const scrollLeft = (category) => {
    if (category === 'sofa') {
      sofaProductContainerRef.current.scrollBy({
        left: -180,
        behavior: "smooth",
      });
    } else if (category === 'mesa') {
      mesaProductContainerRef.current.scrollBy({
        left: -180,
        behavior: "smooth",
      });
    } else if (category === 'cadeira') {
      cadeiraProductContainerRef.current.scrollBy({
        left: -180,
        behavior: "smooth",
      });
    } else if (category === 'luminaria') {
      luminariaProductContainerRef.current.scrollBy({
        left: -180,
        behavior: "smooth",
      });
    }
  };
  
  const scrollRight = (category) => {
    if (category === 'sofa') {
      sofaProductContainerRef.current.scrollBy({
        left: 180,
        behavior: "smooth",
      });
    } else if (category === 'mesa') {
      mesaProductContainerRef.current.scrollBy({
        left: 180,
        behavior: "smooth",
      });
    } else if (category === 'cadeira') {
      cadeiraProductContainerRef.current.scrollBy({
        left: 180,
        behavior: "smooth",
      });
    } else if (category === 'luminaria') {
      luminariaProductContainerRef.current.scrollBy({
        left: 180,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Header />


      <main >

        <Image>
          <h2>
            Confira nossa <span>Newsletter </span>
          </h2>
        </Image>


        <Content  >


          <div className="HeaderPage" style={{ position: "sticky", top: "0px", zIndex: "999" }}>
            <HeaderPage />
          </div>

          <h3>Sofás</h3>

          <Category>

            <ButtonText
              icon={MdOutlineArrowBackIosNew}
              onClick={() => scrollLeft('sofa')}/>

            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} ref={sofaProductContainerRef}>

              {products
                .filter((product) => product.category === "sofa")
                .map((product) => (
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

            <ButtonText
              icon={MdOutlineArrowForwardIos}
              onClick={() => scrollRight('sofa')}
            />


          </Category>


          <h3>Mesas</h3>
          <Category>



            <ButtonText
              icon={MdOutlineArrowBackIosNew}
              onClick={() => scrollLeft('mesa')} />

            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} ref={ mesaProductContainerRef }>
              {products
                .filter((product) => product.category === "mesa")
                .map((product) => (
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

            <ButtonText
              icon={MdOutlineArrowForwardIos}
              onClick={() => scrollRight('mesa')}
            />


          </Category>

          <h3>Cadeiras</h3>
          <Category>



            <ButtonText
              icon={MdOutlineArrowBackIosNew}
              onClick={() => scrollLeft('cadeira')} />

            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} ref={cadeiraProductContainerRef}>
              {products
                .filter((product) => product.category === "cadeira")
                .map((product) => (
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

            <ButtonText
              icon={MdOutlineArrowForwardIos}
              onClick={() => scrollRight('cadeira')}
            />


          </Category>


          <h3>Luminárias</h3>
          <Category>



            <ButtonText
              icon={MdOutlineArrowBackIosNew}
              onClick={() => scrollLeft('luminaria')}/>

            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} ref={luminariaProductContainerRef}>
              {products
                .filter((product) => product.category === "luminaria")
                .map((product) => (
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

            <ButtonText
              icon={MdOutlineArrowForwardIos}
              onClick={() => scrollRight('luminaria')}
            />


          </Category>



        </Content>
      </main>


    </Container>
  );
};


export default Home;
