import React from 'react'
import { Container, Content } from './styles'
import {  FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth';
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom';


const Sidebar = ({sidebar, active }) => {
    const { signOut } =  useAuth();
    const navigate = useNavigate();

      function handleSignOut(){
        navigate("/");
         signOut();
      }

  return (
    <Container sidebar={active}>
    
      <Content>
        <Button icon={ FaSignOutAlt} onClick={handleSignOut} title="SignOut" />
     
      </Content>
    </Container>
  )
}

export default Sidebar