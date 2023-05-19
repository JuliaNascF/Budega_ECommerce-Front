import { Container} from "./styles";
import { Input } from "../Input";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Sidebar from '../Sidebar';


export function Header({  search, setSearch }) {
  const [menuIconAnimation, setMenuIconAnimation] = useState('');
  const navigate= useNavigate();
  const [sidebar, setSidebar] = useState(false)


  function handleCart(){
      navigate("/cart")
  }



  function handleFavorites(){
    navigate("/favorites")
}

const toggleMenu = () => {
  setSidebar(!sidebar);
  setMenuIconAnimation(sidebar ? 'bars-rotate' : 'times-rotate');
};



  return (
    <Container>
      
      <div className={`menu ${menuIconAnimation}`} onClick={toggleMenu}>
        {sidebar ? <FaTimes /> : <FaBars />}
      </div>

      {sidebar && <Sidebar active={setSidebar} />}
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
