import { Container } from "./styles";
import { Input } from "../Input";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


export function Header({  search, setSearch }) {

  const navigate= useNavigate();

  function handleCart(){
      navigate("/cart")
  }


  function handleFavorites(){
    navigate("/favorites")
}

  return (
    <Container>
      <img className="menu" src={menu} />
      <img className="Budega" src={logo} />

      <Input placeholder="Pesquisar pelo título"
       />

      <p onClick={handleFavorites}>Favoritos</p>

      <div onClick={handleCart} className="bag">
        <span>{<HiOutlineShoppingBag />}</span>
        Sacola
      </div>
      <img
        className="Avatar"
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
      />
    </Container>
  );
}
