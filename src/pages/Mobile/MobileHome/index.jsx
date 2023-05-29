import { Container, Content, Image, Category } from "./styles";
import { Product } from "../../../components/Product"
import { HeaderPage } from "../../../components/HeaderPage";
import { Loading } from "../../../components/Loading";
import SidebarMobile from "../../../components/SidebarMobile";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'
import { Input } from "../../../components/Input";
import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";
import cart from "../../../assets/cart.svg"


 export function MobileHome() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuIconAnimation, setMenuIconAnimation] = useState('');
  const [sidebar, setSidebar] = useState(false)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true);


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

  useEffect(() => {
    async function fetchProducts() {
      const resp = await api.get("/products");
      setLoading(false);
      const allProducts = resp.data;

      const filteredProducts = allProducts.filter((product) => {
        const lowerCaseSearch = search.toLowerCase();
        const lowerCaseTitle = product.title.toLowerCase();
        const lowerCaseCategory = product.category.toLowerCase();

        return (
          lowerCaseTitle.includes(lowerCaseSearch) ||
          lowerCaseCategory.includes(lowerCaseSearch)
        );
      });

      setProducts(filteredProducts);
    }

    fetchProducts();
  }, [search]);

  const navigate = useNavigate();

 

  function handleCart() {
    navigate(`/cart`)
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
      type='search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
       />

         </header>
          <h2>
          Newsletter
          </h2>
        </Image>


        <Content   >


          <div className="HeaderPage" style={{ position: "sticky", top: "0px", zIndex: "999" }}>
            <HeaderPage mobile/>
          </div>

          <h3>Sofás</h3>

          <Category>

    

            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} >
               {loading ? (
              <div className="loading"  style={{
                display: "flex",
                gap: "10px",
                scrollBehavior: "smooth"
              }}>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
              </div>
                
              ) : (
              
                products
                  .filter((product) => product.category === "sofa")
                  .map((product) => (
                    <Product
                      key={product._id}
                      thumbnail={product.thumbnail}
                      category={product.category}
                      price={product.price}
                      data={product}
                    />
                  ))
              )}
            </div>

           


          </Category>


          <h3>Mesas</h3>
          <Category>




            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} >
                {loading ? (
              <div className="loading"  style={{
                display: "flex",
                gap: "10px",
                scrollBehavior: "smooth"
              }}>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
              </div>
                
              ) : (

              products
                .filter((product) => product.category === "mesa")
                .map((product) => (
                  <Product
                  key={product._id}
                    thumbnail={product.thumbnail}
                    category={product.category}
                    price={product.price}
                    data={product}
                  />
                  ))
              )}
            </div>
       

          </Category>

          <h3>Cadeiras</h3>
          <Category>




            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }}>
                 {loading ? (
              <div className="loading"  style={{
                display: "flex",
                gap: "10px",
                scrollBehavior: "smooth"
              }}>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
              </div>
                
              ) : (

              products
                .filter((product) => product.category === "cadeira")
                .map((product) => (
                  <Product
                  key={product._id}
                    thumbnail={product.thumbnail}
                    category={product.category}
                    price={product.price}
                    data={product}
                  />
                  ))
                  )}
            </div>

        

          </Category>


          <h3>Luminárias</h3>
          <Category>




            <div className="products" style={{
              display: "flex",
              scrollBehavior: "smooth"
            }} >
                   {loading ? (
              <div className="loading"  style={{
                display: "flex",
                gap: "10px",
                scrollBehavior: "smooth"
              }}>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
                <Loading/>
              </div>
                
              ) : (

              products
                .filter((product) => product.category === "luminaria")
                .map((product) => (
                  <Product
                  key={product._id}
                    thumbnail={product.thumbnail}
                    category={product.category}
                    price={product.price}
                    data={product}
                  />
                  ))
                  )}
            </div>


          </Category>



        </Content>

       <footer>
         <img onClick={handleCart} src={cart} alt="" />
       </footer>
      </main>
       

    </Container>
  );
};



