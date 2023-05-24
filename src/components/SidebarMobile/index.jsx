import React from 'react'
import { Container, Content } from './styles'
import {  FaSignOutAlt, FaHeart } from 'react-icons/fa'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useAuth } from '../../hooks/auth';
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom';

const SidebarMobile = ({sidebar, active }) => {
    const { signOut } =  useAuth();
    const navigate = useNavigate();

      function handleSignOut(){
         signOut();
      }

      function handleFavorites(){
        navigate("/favorites")
     }

  return (
    <Container sidebar={active}>
    
      <Content>
      <Button icon={ FaHeart} onClick={handleFavorites} title="Favoritos" />
      <Button icon={ FaSignOutAlt} onClick={handleSignOut} title="SignOut" />
      <Button icon={HiOutlineShoppingBag}  title="Compras" />
  
     
      </Content>
    </Container>
  )
}

export default SidebarMobile;