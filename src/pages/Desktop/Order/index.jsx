
import { Container, Content } from "./styles";
import { Header } from '../../../components/Header';
import { ButtonText } from "../../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi';
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function Order() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/orders/pedidos");
        const data = await response.data;
        setIsLoading(false);
        setOrders(data);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />

        </div>
        <Content>
          <h2>Histórico de Compras </h2>
          {isLoading ? (
            <FaSpinner size={25} className="loading-spinner" />
            ) : orders.length >0 ? (
          orders.map((order) => (
            <div key={order._id}>
                <h3>Pedido: {order._id}</h3>
                <p>Método de entrega: {order.deliveryMethod}</p>
                <p>Método de pagamento: {order.paymentMethod}</p>
                <p>
                  {order.cartItems.map((item) => (
                    <li key={item.productId}>
                      {item.product.title} - Quantidade: {item.quantity}
                    </li>
                  ))}
                </p>
                <p>Preço total: {order.totalPrice}</p>
              </div>
            ))
            ) : (
              <p className="noOrder">Você não possui compras</p>
          )}
        </Content>


      </main>
    </Container>
  );
}