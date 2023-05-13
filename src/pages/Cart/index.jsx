
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import {api} from '../../services/api';

export function Cart() {
 

  return (
    <Container>
      <Header />
      <main>
        <Content>
        
        </Content>
      </main>
    </Container>
  )
}