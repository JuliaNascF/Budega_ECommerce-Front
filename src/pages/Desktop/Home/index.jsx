import { Container, Content, Image, Category } from "./styles";
import { Header } from "../../../components/Header";
import { Product } from "../../../components/Product"
import { HeaderPage } from "../../../components/HeaderPage";
import { ButtonText } from "../../../components/ButtonText";
import { Loading } from "../../../components/Loading";
import { useEffect, useState, useRef } from "react";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md"
import { api } from "../../../services/api";


function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const resp = await api.get(`/products`);

      setProducts(resp.data);
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


const sofaProductContainerRef = useRef(null);
const mesaProductContainerRef = useRef(null);
const cadeiraProductContainerRef = useRef(null);
const luminariaProductContainerRef = useRef(null);



  const scrollLeft = (category) => {
    if (category === 'sofa') {
      sofaProductContainerRef.current.scrollBy({
        left: -260,
        behavior: "smooth",
      });
    } else if (category === 'mesa') {
      mesaProductContainerRef.current.scrollBy({
        left: -260,
        behavior: "smooth",
      });
    } else if (category === 'cadeira') {
      cadeiraProductContainerRef.current.scrollBy({
        left: -260,
        behavior: "smooth",
      });
    } else if (category === 'luminaria') {
      luminariaProductContainerRef.current.scrollBy({
        left: -260,
        behavior: "smooth",
      });
    }
  };
  
  const scrollRight = (category) => {
    if (category === 'sofa') {
      sofaProductContainerRef.current.scrollBy({
        left: 260,
        behavior: "smooth",
      });
    } else if (category === 'mesa') {
      mesaProductContainerRef.current.scrollBy({
        left: 260,
        behavior: "smooth",
      });
    } else if (category === 'cadeira') {
      cadeiraProductContainerRef.current.scrollBy({
        left: 260,
        behavior: "smooth",
      });
    } else if (category === 'luminaria') {
      luminariaProductContainerRef.current.scrollBy({
        left: 260,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Header value={search} setSearch={setSearch} />


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
                // Renderizar os produtos normalmente quando o carregamento estiver concluído
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
