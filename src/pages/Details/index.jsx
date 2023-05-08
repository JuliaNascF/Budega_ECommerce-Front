
import { Container, Content } from "./styles"
import { Header } from '../../components/Header'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { api } from "../../services/api"
import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Details() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }



  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params._id}`);
      setData(response.data)
    }

    fetchProduct();

  }, [])


  const images = [
   
  ];


  return (
    <Container>
      <Header />
      <main>
        <Content>

          <h1>{data.title}</h1>

          <ImageGallery
            items={images}
            showThumbnails={true}
            thumbnailPosition={"left"}
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={selectedIndex}
          />



      </Content>
    </main>
      
    </Container >
    )
}