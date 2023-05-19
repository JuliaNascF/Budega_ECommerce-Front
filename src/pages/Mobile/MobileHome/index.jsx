import { Container, Content, Image, Category } from "./styles";
import { Product } from "../../../components/Product"
import { HeaderPage } from "../../../components/HeaderPage";
import { ButtonText } from "../../../components/ButtonText";
import SidebarMobile from "../../../components/SidebarMobile";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import { Input } from "../../../components/Input";
import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";


 export function MobileHome() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuIconAnimation, setMenuIconAnimation] = useState('');
  const [sidebar, setSidebar] = useState(false)



  useEffect(() => {
    async function fetchProducts() {
      try {
        const resp = await api.get(`/products`);
        setProducts(resp.data);
        setIsLoading(false); 
      } catch (error) {
        console.log('Erro ao carregar os produtos:', error);
        setIsLoading(false); 
      }
    }
    fetchProducts();
  }, []);
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  const toggleMenu = () => {
    setSidebar(!sidebar);
    setMenuIconAnimation(sidebar ? 'bars-rotate' : 'times-rotate');
    const mainElement = document.querySelector("main");
    if (mainElement) {
      if (!sidebar) {
        mainElement.classList.add("no-scroll");
      } else {
        mainElement.classList.remove("no-scroll");
      }
    }
  };



  return (
    <Container>
      
      <main className={sidebar ? "no-scroll" : ""}>
         
        <Image>
         <header>
        <div className={`menu ${menuIconAnimation}`} onClick={toggleMenu}>
        {sidebar ? <FaTimes /> : <FaBars />}
      </div>

      {sidebar && <SidebarMobile active={setSidebar} />}

      <Input icon={FaSearch} placeholder="Pesquisar pelo título"
       />

         </header>
          <h2>
          Newsletter
          </h2>
        </Image>


        <Content   >


          <div className="HeaderPage" style={{ position: "sticky", top: "0px", zIndex: "999" }}>
            <HeaderPage />
          </div>

          <h3>Sofás</h3>

          <Category>

    

            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} >

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

           


          </Category>


          <h3>Mesas</h3>
          <Category>




            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} >
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

       

          </Category>

          <h3>Cadeiras</h3>
          <Category>




            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }}>
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

        

          </Category>


          <h3>Luminárias</h3>
          <Category>




            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} >
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


          </Category>



        </Content>
      </main>


    </Container>
  );
};



