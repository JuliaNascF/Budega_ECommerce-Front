import { Container } from "./styles";
import { Input } from "../Input";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";


export function Header({  search, setSearch }) {
  return (
    <Container>
      <img className="menu" src={menu} />
      <img className="Budega" src={logo} />

      <Input placeholder="Pesquisar pelo título"
       />

      <p>Favoritos</p>

      <div className="bag">
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
